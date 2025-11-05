import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Alert,
  TouchableOpacity
} from 'react-native';
import { globalStyles, colors } from '../styles/global';
import ProductCard from './ProductCard';
import { apiService } from '../services/api';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setError(null);
      const response = await apiService.getProducts();

      if (response.success) {
        setProducts(response.data);
      } else {
        setError('Failed to load products');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
      console.error('Error loading products:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadProducts();
  };

  const handleAddToCart = (product) => {
    if (product.stock_quantity === 0) {
      Alert.alert('Out of Stock', 'This product is currently out of stock.');
      return;
    }

    onAddToCart(product);
    Alert.alert('Added to Cart', `${product.name} added to your cart!`);
  };

  const handleProductPress = (product) => {
    Alert.alert(
      product.name,
      `${product.description}\\n\\nPrice: R${product.price}\\nStock: ${product.stock_quantity} available`,
      [
        { text: 'OK' },
        {
          text: 'Add to Cart',
          onPress: () => handleAddToCart(product)
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 16, color: colors.gray }}>Loading products...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: colors.danger, fontSize: 16, marginBottom: 16, textAlign: 'center' }}>{error}</Text>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={loadProducts}
        >
          <Text style={globalStyles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={globalStyles.screenContainer}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.dark }}>
          Our Products
        </Text>
        <Text style={{ fontSize: 16, color: colors.gray, marginTop: 4 }}>
          Discover our amazing products and services
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item)}
            onAddToCart={handleAddToCart}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={{ alignItems: 'center', padding: 32 }}>
            <Text style={{ color: colors.gray, fontSize: 16 }}>No products available</Text>
          </View>
        }
      />
    </View>
  );
};

export default ProductList;
