import {Action, createReducer, on} from "@ngrx/store";
import {cartInitialState, CartState} from "./cart.state";
import {CartActions} from "./cart.action";
import {Product} from "../../models/product.interface";
import {CartItem} from "../../models/cart-item.interface";
import {produce} from "immer";

const reducer = createReducer<CartState>(
  cartInitialState,
  on(CartActions.add, (state, action) =>
    produce(state, draft => {
      draft.items = addItem(draft.items, action.product, action.quantity);
    })
  ),
  on(CartActions.remove, (state, action) =>
    produce(state, draft => {
      draft.items = removeItem(draft.items, action.productId);
    }),
  ),
  on(CartActions.modifyQuantity, (state, action) =>
    produce(state, draft => {
      draft.items = modifyQuantity(state.items, action.productId, action.modification)
    }),
  ),
  on(CartActions.clear, (state, action) =>
    produce(state, draft => {
      draft.items = []
    })
  )
);

function addItem(items: CartItem[], product: Product, quantity: number): CartItem[] {
  const cartItem = items.find(p => p.id === product.id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    items.push({
      id: product.id,
      name: product.productName,
      quantity: quantity,
      priceHT: product.price,
      priceTTC: product.price + Number(product.tax),
      tax: product.tax,
    })
  }
  return items;
}

function modifyQuantity(items: CartItem[], productId: number, quantity: number) {
  const cartItem = items.find(p => p.id === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  }
  return items;
}

function removeItem(items: CartItem[], productId: number) {
  const cartItem = items.find(p => p.id === productId);
  if (cartItem) {
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
