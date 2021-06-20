import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Colors from "@constants/Colors";
import * as cartActions from "@store/actions/cart";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const product = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image style={styles.image} source={{ uri: product.imageUrl }} />
        <View style={styles.actions}>
          <Button
            title="Add to Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(product));
            }}
            color={Colors.primary}
          />
        </View>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
  price: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
  },
  description: {
    fontFamily: "open-sans",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
