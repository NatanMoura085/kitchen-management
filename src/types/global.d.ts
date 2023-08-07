interface Order {
  id: number;
  name: string;
  status: string;
}

interface KitchenContextType {
  orders: Order[];
}
