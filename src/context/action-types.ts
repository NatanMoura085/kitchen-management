const prefix = `KitchenProvider`;
export const ADD_ORDER = "ADD_ORDER";
export const UPDATE_ORDER_STATUS = "UPDATE_ORDER_STATUS";
export const DELETE_ORDER = "DELETE_ORDER";
export const COMPLETE_ORDER = "COMPLETE_ORDER";
export const SET_COOKING_TIME = "SET_COOKING_TIME";
export const CLEAR_ORDERS = "CLEAR_ORDERS";


// Interfaces para as ações
interface AddOrderAction {
    type: typeof ADD_ORDER;
    payload: Order;
  }
  
  interface DeleteOrderAction {
    type: typeof DELETE_ORDER;
    payload: { id: number };
  }
  
  interface ClearOrdersAction {
    type: typeof CLEAR_ORDERS;
  }
  
 
  export type ActionTypes = AddOrderAction | DeleteOrderAction | ClearOrdersAction;