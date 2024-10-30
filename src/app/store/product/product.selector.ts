import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductState} from "./product.state";
import {Category} from "../../models/category.enum";
import {Product} from "../../models/product.interface";
import {calculateTaxes} from "../../utils/utlis";

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

// get Products by category filter
const selectProductsByCategory = (category: Category | null) => createSelector(
  selectProducts,
  (products: Product[]) => {
    if (category == null) {
      return products;
    } else {
      return products.filter(p => p.category == category);
    }
  }
);

export const ProductSelectors = {
  selectProductState,
  selectProductsWithoutTaxes,
  selectProducts,
  selectProductById,
  selectProductsByCategory
};
