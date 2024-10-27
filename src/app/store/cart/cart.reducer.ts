import {Action, createReducer, on} from "@ngrx/store";
import {cartInitialState, CartState} from "./cart.state";
import {CartActions} from "./cart.action";
import {Product} from "../../models/product.interface";
import {CartItem} from "../../models/cart-item.interface";

const reducer = createReducer<CartState>(
  cartInitialState,
  on(CartActions.add, (state, action): CartState => {
    return {
      ...state,
      items: addItem(state.items, action.product, action.quantity)
    };
  }),
  on(CartActions.remove, (state, action): CartState => {
    return {
      ...state,
      items: removeItem(state.items, action.product)
    };
  }),
  on(CartActions.modifyQuantity, (state, action): CartState => {
    return {
      ...state,
      items: modifyQuantity(state.items, action.product, action.modification),
    };
  }),
  on(CartActions.clear, (state, action): CartState => {
    return {
      ...state,
      items: []
    };
  })
);

function addItem(items: CartItem[], product: Product, quantity: number) : CartItem[]{
  const cartItem = items.find(p=> p.id === product.id);
  if(cartItem){
    cartItem.quantity += quantity;
  }else{
    items.push({
      id: product.id,
      name: product.productName,
      quantity: quantity,
      priceHT: product.price,
      tax: product.tax
    })
  }
  return items;
}

function modifyQuantity(items: CartItem[], product: Product, quantity: number){
  const cartItem = items.find(p=> p.id === product.id);
  if(cartItem){
    cartItem.quantity += quantity;
  }
  return items;
}
function removeItem(items: CartItem[], product: Product){
  const cartItem = items.find(p=> p.id === product.id);
  if(cartItem){
    items.splice(items.indexOf(cartItem), 1)
  }
  return items;
}

export function cartReducer(
  state: CartState | undefined,
  action: Action
) {
  return reducer(state, action);
}
