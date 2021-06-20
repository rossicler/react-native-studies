import { ADD_TO_CART } from "@store/actions/cart";
import CartItem from "@models/cart-item";

interface State {
  items: object;
  totalAmount: number;
}

const initialState: State = {
  items: {},
  totalAmount: 0,
};

export default (state: State = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let cartItem: CartItem;
      if (state.items[addedProduct.id]) {
        cartItem = {
          quantity: state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          sum: state.items[addedProduct.id].sum + productPrice,
        };
      } else {
        cartItem = {
          quantity: 1,
          productPrice,
          productTitle,
          sum: productPrice,
        };
      }
      state = {
        ...state,
        items: { ...state.items, [addedProduct.id]: cartItem },
        totalAmount: state.totalAmount + productPrice,
      };
  }
  return state;
};
