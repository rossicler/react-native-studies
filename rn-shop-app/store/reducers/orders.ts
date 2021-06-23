import { Order } from "@models/order";
import { ADD_ORDER, SET_ORDERS } from "@store/actions/orders";
import moment from "moment";

const inicialState = {
  orders: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      state = { orders: action.orders };
      break;
    case ADD_ORDER:
      const newOrder: Order = {
        id: action.orderData.id,
        items: action.orderData.items,
        totalAmount: action.orderData.amount,
        date: moment(action.orderData.date).format("MMMM Do YYYY, hh:mm"),
      };
      state = { ...state, orders: state.orders.concat(newOrder) };
      break;
  }

  return state;
};
