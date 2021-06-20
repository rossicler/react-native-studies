import { ADD_TO_CART, REMOVE_FROM_CART } from "@store/actions/cart";
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
      break;
    case REMOVE_FROM_CART:
      const selectedCardItem = state.items[action.pid];
      const currentQty = state.items[action.pid].quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        selectedCardItem.quantity -= 1;
        selectedCardItem.sum -= selectedCardItem.productPrice;

        const updatedCartItem: CartItem = { ...selectedCardItem };
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      state = {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCardItem.productPrice,
      };
      break;
  }
  return state;
};
