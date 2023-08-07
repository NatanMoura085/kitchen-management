import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { ActionTypes } from "./action-types";

type ProvideProps = {
  children: React.ReactNode;
};

interface Order {
  id: number;
  name: string;
  status: string;
}

interface KitchenContextType {
  orders: Order[];
  dispatch: React.Dispatch<ActionTypes>;
}

const initialState: KitchenContextType = {
  orders: [],
  dispatch: () => {
  
  },
};

export const Context = createContext<KitchenContextType | undefined>(undefined);

const KitchenProvider: React.FC<ProvideProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ orders: state.orders, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default KitchenProvider;
