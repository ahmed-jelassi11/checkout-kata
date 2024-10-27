import {cartReducer} from "./cart.reducer";
import {CartActions} from "./cart.action";
import {cartInitialState, CartState} from "./cart.state";
import {Product} from "../../models/product.interface";
import {Category} from "../../models/category.enum";
import {CartItem} from "../../models/cart-item.interface";

describe('Cart reducers', () => {

  const reducer = cartReducer;
  const product: Product = {
    id: 1,
    productName: 'product 1',
    category: Category.Food,
    isImported: false,
    tax: 0,
    price: 1,
    quantity: 1
  };

  it('should add Item', () => {
    const state: CartState = cartInitialState;
    const action = CartActions.add({product: product, quantity: 2});
    const result = reducer(state, action);

    expect(result.items).toEqual([{
      id: 1,
      name: 'product 1',
      priceHT: 1,
      tax: 0,
      quantity: 2
    }]);
  });

  it('should remove item', () => {
    const cartItem: CartItem = {
      id: 1,
      name: "product 1",
      priceHT: 1,
      tax: 0,
      quantity: 1
    };
    const state: CartState = {
      items: [cartItem]
    };


    const action = CartActions.remove({product: product});
    const result = reducer(state, action);
    expect(result.items.length).toBe(0)
  });
  it('should remove clear cart', () => {
    const cartItem: CartItem = {
      id: 1,
      name: "product 1",
      priceHT: 1,
      tax: 0,
      quantity: 1
    };
    const cartItem2: CartItem = {
      id: 2,
      name: "product 2",
      priceHT: 1,
      tax: 0,
      quantity: 1
    };
    const state: CartState = {
      items: [cartItem, cartItem2]
    };


    const action = CartActions.clear();
    const result = reducer(state, action);
    expect(result.items.length).toBe(0)
  });

  it('should update increase the quantity of an item', ()=>{

    const cartItem: CartItem = {
      id: 1,
      name: "product 1",
      priceHT: 1,
      tax: 0,
      quantity: 3
    };
    const cartItem2: CartItem = {
      id: 2,
      name: "product 2",
      priceHT: 1,
      tax: 0,
      quantity: 1
    };
    const state: CartState = {
      items: [cartItem, cartItem2]
    };
    const action = CartActions.modifyQuantity({product: product, modification: +1});
    const result = reducer(state, action);
    expect(result.items.find(item=> item.id=== product.id)?.quantity).toBe(4)
  });

  it('should update decrease the quantity of an item', ()=>{

    const cartItem: CartItem = {
      id: 1,
      name: "product 1",
      priceHT: 1,
      tax: 0,
      quantity: 3
    };
    const cartItem2: CartItem = {
      id: 2,
      name: "product 2",
      priceHT: 1,
      tax: 0,
      quantity: 1
    };
    const state: CartState = {
      items: [cartItem, cartItem2]
    };
    const action = CartActions.modifyQuantity({product: product, modification: -1});
    const result = reducer(state, action);
    expect(result.items.find(item=> item.id=== product.id)?.quantity).toBe(2)
  });

});
