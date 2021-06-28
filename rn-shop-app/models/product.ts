export interface Product {
  id?: string;
  ownerId?: string;
  ownerPushToken?: string;
  title: string;
  imageUrl: string;
  description: string;
  price?: number;
}
