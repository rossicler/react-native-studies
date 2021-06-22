import React from "react";
import { StyleSheet, Platform, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "@components/shop/ProductItem";
import * as cartActions from "@store/actions/cart";
import HeaderButton from "@components/ui/HeaderButton";
import Colors from "@constants/Colors";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const viewProductHandler = (id, title) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() =>
            viewProductHandler(itemData.item.id, itemData.item.title)
          }
        >
          <Button
            title="View Details"
            color={Colors.primary}
            onPress={() =>
              viewProductHandler(itemData.item.id, itemData.item.title)
            }
          />
          <Button
            title="To Cart"
            color={Colors.primary}
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Products",
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
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
            onPress={() => navData.navigation.navigate("Cart")}
          />
        </HeaderButtons>
      );
    },
  };
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
