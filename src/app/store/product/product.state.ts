import {Product} from "../../models/product.interface";

export interface ProductState {
  products:Product[];
  error: string;
}

export const productInitialState: ProductState = {
  products: [],
  error: '',
};
