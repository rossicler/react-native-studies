import React, { useEffect, useState } from "react";
import { FlatList, Platform, View, ActivityIndicator } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "@components/ui/HeaderButton";
import OrderItem from "@components/shop/OrderItem";
import EmptyScreen from "@components/ui/EmptyScreen";
import * as ordersActions from "@store/actions/orders";
import Colors from "@constants/Colors";

const OrdersScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      dispatch(ordersActions.fetchOrders());
      setIsLoading(false);
    };
    fetchOrders();
  }, [dispatch, setIsLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (orders.length === 0) {
    return (
      <EmptyScreen message="No orders found, maybe start ordering some products?" />
    );
  }

  return (
    <FlatList
      data={orders}
      renderItem={(itemData) => (
        <OrderItem order={itemData.item} items={itemData.item.items} />
      )}
    />
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
            onPress={() => navData.navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    },
  };
};

export default OrdersScreen;
