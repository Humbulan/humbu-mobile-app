import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { globalStyles, colors } from '../styles/global';

const ProductCard = ({ product, onPress, onAddToCart }) => {
  return (
    <TouchableOpacity
      style={globalStyles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={{ flexDirection: 'row' }}>
        {/* Product Image */}
        <View style={{
          width: 80,
          height: 80,
          backgroundColor: colors.light,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 12,
        }}>
          {product.image_url ? (
            <Image
              source={{ uri: product.image_url }}
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          ) : (
            <Text style={{ color: colors.gray, fontSize: 12 }}>
              {product.name.charAt(0).toUpperCase()}
            </Text>
          )}
        </View>
        
        {/* Product Details */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.dark }}>
            {product.name}
          </Text>
          <Text style={{ fontSize: 14, color: colors.gray, marginTop: 4 }}>
            {product.description}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <Text style={globalStyles.price}>
              R{product.price}
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: colors.primary,
                paddingHorizontal: 16,
                paddingVertical: 6,
                borderRadius: 6,
              }}
              onPress={() => onAddToCart(product)}
            >
              <Text style={{ color: colors.white, fontWeight: '600' }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>

          {/* Stock Status */}
          <View style={{ marginTop: 4 }}>
            <Text style={{
              fontSize: 12,
              color: product.stock_quantity > 0 ? colors.success : colors.danger
            }}>
              {product.stock_quantity > 0 
                ? `${product.stock_quantity} in stock`
                : 'Out of stock'
              }
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
