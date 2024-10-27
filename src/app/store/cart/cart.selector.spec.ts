import {CartState} from "./cart.state";
import {CartSelectors} from "./cart.selector";

describe('Cart Selectors', () => {
  let cartState: CartState;

  beforeEach(() => {
    cartState = {
      items: [
        { id: 1, name: 'product1', priceHT: 100, tax: 20, quantity: 2 },
        { id: 2, name: 'product2', priceHT: 200, tax: 30, quantity: 1 },
      ],
    };
  });

  it('should select cart items', () => {
    const result = CartSelectors.selectCartItems.projector(cartState);
    expect(result).toEqual(cartState.items);
  });

  it('should calculate total quantity of items in the cart', () => {
    const result = CartSelectors.selectCartItemsQuantity.projector(cartState.items);
    expect(result).toBe(3);
  });

  it('should calculate total HT of items in the cart', () => {
    const result = CartSelectors.selectCartTotalHT.projector(cartState.items);
    expect(result).toBe(400);
  });

  it('should calculate total taxes of items in the cart', () => {
    const result = CartSelectors.selectCartTotalTaxes.projector(cartState.items);
    expect(result).toBe(70);
  });

  it('should calculate total TTC of items in the cart', () => {
    const totalHT = CartSelectors.selectCartTotalHT.projector(cartState.items);
    const totalTaxes = CartSelectors.selectCartTotalTaxes.projector(cartState.items);
    const result = CartSelectors.selectCartTotalTTC.projector(totalHT, totalTaxes);
    expect(result).toBe(470);
  });
});
