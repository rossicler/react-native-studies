export default interface CartItem {
  quantity: number;
  productPrice: number;
  productTitle: string;
  pushToken?: string;
  sum: number;
}
