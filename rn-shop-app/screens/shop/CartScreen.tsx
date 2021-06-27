import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "@components/shop/CartItem";
import Colors from "@constants/Colors";
import * as cartAction from "@store/actions/cart";
import * as orderActions from "@store/actions/orders";
import Card from "@components/ui/Card";

const CartScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        ...state.cart.items[key],
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productTitle > b.productTitle ? 1 : -1
    );
  });
  const dispatch = useDispatch();

  const sendOrderHandler = async () => {
    setIsLoading(true);
    await dispatch(orderActions.addOrder(cartItems, cartTotalAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.ammount}>
            ${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Button
            title="Order Now"
            onPress={sendOrderHandler}
            color={Colors.secondary}
            disabled={cartItems.length === 0 ? true : false}
          />
        )}
      </Card>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => (
          <CartItem
            item={itemData.item}
            deletable={true}
            onRemove={() => {
              dispatch(cartAction.removeFromCart(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Your Cart",
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  ammount: {
    color: Colors.primary,
  },
});
