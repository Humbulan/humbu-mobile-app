import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { registerRootComponent } from 'expo';

// Disable update checking
console.disableYellowBox = true;

function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Humbu Wandeme Trading Enterprise</Text>
        <Text style={styles.headerSubtitle}>079 465 8481 | 💬️ Thohoyandou, Limpopo 0950</Text>
        <Text style={styles.connectionStatus}>📍 Connected to Humbu Platform</Text>
      </View>

      {/* Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Products</Text>
        <Text style={styles.sectionSubtitle}>Discover our amazing products and services</Text>
        
        {/* WiFi Router Product */}
        <View style={styles.productCard}>
          <View style={styles.productImage}>
            <Text style={styles.imagePlaceholder}>W</Text>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>WiFi Router Rental</Text>
            <Text style={styles.productDescription}>Monthly WiFi router rental service</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>R150</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.stock}>10 in stock</Text>
          </View>
        </View>

        {/* Shipping Container Product */}
        <View style={styles.productCard}>
          <View style={styles.productImage}>
            <Text style={styles.imagePlaceholder}>C</Text>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>20ft Shipping Container (Used)</Text>
            <Text style={styles.productDescription}>Standard 20-foot shipping container, wind and watertight</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Price varies</Text>
              <TouchableOpacity style={styles.inquireButton}>
                <Text style={styles.buttonText}>Inquire</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#1a365d',
    padding: 20,
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#cbd5e0',
    marginBottom: 8,
    textAlign: 'center',
  },
  connectionStatus: {
    fontSize: 13,
    color: '#48bb78',
    fontWeight: '600',
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2d3748',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  productImage: {
    width: 60,
    height: 60,
    backgroundColor: '#edf2f7',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#cbd5e0',
  },
  imagePlaceholder: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a5568',
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2d3748',
  },
  productDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 12,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53e3e',
  },
  addButton: {
    backgroundColor: '#3182ce',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  inquireButton: {
    backgroundColor: '#38a169',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  stock: {
    fontSize: 12,
    color: '#38a169',
    fontWeight: '500',
  },
});

registerRootComponent(App);
