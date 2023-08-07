import * as actionTypes from "../context/action-types";
import { ActionTypes } from "../context/action-types";

interface State {
  orders: Order[];
}

export const reducer = (state: State, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.ADD_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case actionTypes.DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== action.payload.id),
      };
    case actionTypes.CLEAR_ORDERS:
      return { ...state, orders: [] };
    default:
      return state;
  }
};
