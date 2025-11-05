import axios from 'axios';

const API_BASE_URL = 'http://192.168.8.26:8080/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service methods
export const apiService = {
  // Health check
  healthCheck: async () => {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Products
  getProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProduct: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Orders
  createOrder: async (orderData) => {
    try {
      const response = await api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getOrders: async () => {
    try {
      const response = await api.get('/orders');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Payments
  getPaymentMethods: async () => {
    try {
      const response = await api.get('/payment/methods');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  processPayment: async (paymentData) => {
    try {
      const response = await api.post('/payment/process', paymentData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getPaymentStatus: async (orderId) => {
    try {
      const response = await api.get(`/payment/status/${orderId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

// Business information
export const businessInfo = {
  name: 'Humbu Wandeme Trading Enterprise',
  phone: '079 465 8481',
  email: 'humbulani@humbu.store',
  location: 'Thohoyandou, Limpopo 0950',
  website: 'https://humbu.store'
};

export default apiService;
