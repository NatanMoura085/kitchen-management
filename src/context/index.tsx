import { createContext } from "react";

type ProvideProps = {
  children: React.ReactNode;
};

const Context = createContext<KitchenContextType | undefined>(undefined);

const KitchenProvider = ({ children }: ProvideProps) => {
  return <Context.Provider value={{ orders: [] }}>{children}</Context.Provider>;
};

export default KitchenProvider;
