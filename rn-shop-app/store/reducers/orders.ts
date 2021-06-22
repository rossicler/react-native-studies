import { Order } from "@models/order";
import { ADD_ORDER } from "@store/actions/orders";
import moment from "moment";

const inicialState = {
  orders: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder: Order = {
        id: new Date().toString(),
        items: action.orderData.items,
        totalAmount: action.orderData.amount,
        date: moment().format("MMMM Do YYYY, hh:mm"),
      };
      state = { ...state, orders: state.orders.concat(newOrder) };
      break;
  }

  return state;
};
