import {CartItem} from "../../models/cart-item.interface";

export interface CartState {
  items:CartItem[];
}

export const cartInitialState: CartState = {
  items: []
};
