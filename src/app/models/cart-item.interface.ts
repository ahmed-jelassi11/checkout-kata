export interface CartItem{
  id: number;
  name: string;
  priceHT: number;
  priceTTC: number;
  quantity: number;
  tax?: number;
}
