// Get complete state of the products in application
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CartState} from "./cart.state";
import {CartItem} from "../../models/cart-item.interface";

const selectCartState = createFeatureSelector<CartState>('cart');

// get All cart items
const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

const selectCartItemsQuantity = createSelector(
  selectCartItems,
  (items: CartItem[])=> items.length == 0 ? 0 : items.map(item => item.quantity).reduce((a, b)=> a+b)
)

const selectCartTotalHT = createSelector(
  selectCartItems,
  (items: CartItem[])=>
    items.length == 0 ? 0 : items.map(item=> item.priceHT * item.quantity).reduce((a, b) => a+b)
)
const selectCartTotalTaxes = createSelector(
  selectCartItems,
  (items: CartItem[])=>
    items.length == 0 ? 0 : items.map(item=> Number(item.tax)* item.quantity).reduce((a, b) => a+b)
)

const selectCartTotalTTC = createSelector(
  selectCartTotalHT,
  selectCartTotalTaxes,
  (total, taxes)=> total + taxes
)

const isCartEmpty= createSelector(
  selectCartItems,
  items=> items.length ==0
)


export const CartSelectors = {
  selectCartState,
  selectCartItems,
  selectCartItemsQuantity,
  selectCartTotalHT,
  selectCartTotalTaxes,
  selectCartTotalTTC,
  isCartEmpty
}

