import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from "./product.state";
import {Category} from "../../models/category.enum";
import {RoundUpPipe} from "../../pipes/roundup.pipe";
import {Product} from "../../models/product.interface";

// Get complete state of the products in application
const selectProductState = createFeatureSelector<ProductState>('product');

// get All products Without taxes
const selectProductsWithoutTaxes = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);

// get All products
const selectProducts = createSelector(
  selectProductsWithoutTaxes,
  (products: Product[]) =>
    products.map(product => ({
        ...product,
        tax: calculateTaxes(product.price, product.category, product.isImported)
      } as Product)
    )
);


// get One product by ID
const selectProductById = (productId: number) => createSelector(
  selectProducts,
  (products: Product[]) => {
    return products.find(p => p.id == productId);
  }
);

export const ProductSelectors = {
  selectProductState,
  selectProductsWithoutTaxes,
  selectProducts,
  selectProductById,
};

function calculateTaxes(price: number, category: Category, isImported: boolean) {
  let roundUpPipe = new RoundUpPipe();
  let taxPercentage = 0;
  if (category === Category.Food || category === Category.Medicine) {
    taxPercentage = 0;
  } else if (category === Category.Books) {
    taxPercentage = 10;
  } else {
    taxPercentage = 20;
  }
  if (isImported) {
    taxPercentage += 5;
  }
  return roundUpPipe.transform((price * taxPercentage) / 100);
}

