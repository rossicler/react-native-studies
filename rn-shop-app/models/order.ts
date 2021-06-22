import { Product } from "./product";

export interface Order {
  id: string;
  items: Product[];
  totalAmount: number;
  date: string;
}
