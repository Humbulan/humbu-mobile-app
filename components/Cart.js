import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { globalStyles, colors } from '../styles/global';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const onRemoveItem = (itemId) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      { 
        text: 'Remove', 
        style: 'destructive',
        onPress: () => {
          setCartItems(prev => prev.filter(item => item.id !== itemId));
        }
      }
    ]);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add some items to your cart first.');
      return;
    }
    Alert.alert(
      'Proceed to Checkout',
      `Total: R${calculateTotal().toFixed(2)}\n\nContinue with payment?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Continue', onPress: () => console.log('Proceeding to checkout') }
      ]
    );
  };

  const onContinueShopping = () => {
    console.log('Continue shopping');
  };

  const renderCartItem = ({ item }) => (
    <View style={[globalStyles.card, { marginVertical: 4 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.dark }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 14, color: colors.gray, marginTop: 2 }}>
            R{item.price.toFixed(2)} each
          </Text>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.primary }}>
            R{(item.price * item.quantity).toFixed(2)}
          </Text>
          <TouchableOpacity
            onPress={() => onRemoveItem(item.id)}
            style={{ marginLeft: 16 }}
          >
            <Text style={{ fontSize: 12, color: colors.danger }}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontSize: 18, color: colors.gray, marginBottom: 16 }}>
          Your cart is empty
        </Text>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={onContinueShopping}
        >
          <Text style={globalStyles.buttonText}>Browse Products</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.dark }}>
            Shopping Cart
          </Text>
          <Text style={{ fontSize: 16, color: colors.gray, marginTop: 4 }}>
            {cartItems.length} item(s) in cart
          </Text>
        </View>

        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 16 }}
        />

        {/* Order Summary */}
        <View style={[globalStyles.card, { margin: 16 }]}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 12 }}>
            Order Summary
          </Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: colors.gray }}>Subtotal</Text>
            <Text style={{ fontWeight: '600' }}>R{calculateTotal().toFixed(2)}</Text>
          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: colors.gray }}>Delivery</Text>
            <Text style={{ fontWeight: '600', color: colors.success }}>Free</Text>
          </View>
          
          <View style={{ 
            height: 1, 
            backgroundColor: colors.border, 
            marginVertical: 8 
          }} />
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>
              R{calculateTotal().toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Delivery Info */}
        <View style={[globalStyles.card, { margin: 16, marginTop: 0 }]}>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
            Delivery Information
          </Text>
          <Text style={{ color: colors.gray, fontSize: 14 }}>
            • Free delivery for container orders
          </Text>
          <Text style={{ color: colors.gray, fontSize: 14 }}>
            • 2-3 business days for Thohoyandou area
          </Text>
          <Text style={{ color: colors.gray, fontSize: 14 }}>
            • Contact: 079 465 8481 for urgent orders
          </Text>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <View style={{ padding: 16, backgroundColor: colors.white }}>
        <TouchableOpacity
          style={[globalStyles.button, { backgroundColor: colors.success }]}
          onPress={handleCheckout}
        >
          <Text style={globalStyles.buttonText}>
            Proceed to Checkout - R{calculateTotal().toFixed(2)}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: colors.primary,
            marginTop: 8
          }]}
          onPress={onContinueShopping}
        >
          <Text style={[globalStyles.buttonText, { color: colors.primary }]}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
