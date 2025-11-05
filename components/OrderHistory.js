import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity 
} from 'react-native';
import { globalStyles, colors } from '../styles/global';
import { apiService, businessInfo } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadOrders = async () => {
    try {
      const response = await apiService.getOrders();
      if (response.success) {
        setOrders(response.data);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadOrders();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return colors.success;
      case 'pending': return colors.warning;
      case 'processing': return colors.primary;
      case 'cancelled': return colors.danger;
      default: return colors.gray;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const renderOrderItem = ({ item }) => (
    <View style={globalStyles.card}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: colors.dark }}>
            Order #{item.id}
          </Text>
          <Text style={{ fontSize: 14, color: colors.gray, marginTop: 2 }}>
            {formatDate(item.created_at)}
          </Text>
          <Text style={{ fontSize: 14, color: colors.gray, marginTop: 2 }}>
            {item.items || 'No items'}
          </Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>
            R{item.total_amount}
          </Text>
          <View style={{ 
            backgroundColor: getStatusColor(item.status) + '20',
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
            marginTop: 4
          }}>
            <Text style={{ 
              fontSize: 12, 
              fontWeight: '600',
              color: getStatusColor(item.status),
              textTransform: 'capitalize'
            }}>
              {item.status}
            </Text>
          </View>
        </View>
      </View>

      {/* Customer Info */}
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: colors.light
      }}>
        <Text style={{ fontSize: 14, color: colors.gray }}>
          {item.customer_name}
        </Text>
        <Text style={{ fontSize: 14, color: colors.gray }}>
          {item.customer_phone}
        </Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 16, color: colors.gray }}>Loading orders...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.screenContainer}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.dark }}>
          Order History
        </Text>
        <Text style={{ fontSize: 16, color: colors.gray, marginTop: 4 }}>
          Your recent orders with {businessInfo.name}
        </Text>
      </View>

      <FlatList
        data={orders}
        renderItem={renderOrderItem}
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
            <Text style={{ color: colors.gray, fontSize: 16 }}>No orders found</Text>
            <Text style={{ color: colors.gray, fontSize: 14, marginTop: 8, textAlign: 'center' }}>
              Your orders will appear here once you start shopping
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default OrderHistory;
