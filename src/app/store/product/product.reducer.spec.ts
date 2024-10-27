import {ProductActions} from "./product.action";
import {productInitialState, ProductState} from "./product.state";
import {productReducer} from "./product.reducer";
import {Product} from "../../models/product.interface";
import {Category} from "../../models/category.enum";

describe('Product reducers', () => {

  const reducer = productReducer;

  /*it('should load request', async () => {
    const state: ProductState = productInitialState;

    const action = ProductActions.load();
    const result = reducer(state, action);

  });*/

  it('should load success', () => {
    const state: ProductState = productInitialState;
    const products: Product[] = [{
      id: 1,
      productName: 'productNameTest',
      category: Category.Food,
      isImported: false,
      price: 1,
      quantity: 1
    }];

    const action = ProductActions.loadSuccess({ products });
    const result = reducer(state, action);

    expect(result.products).toEqual(products);
  });

  it('should load request fail', () => {
    const state: ProductState = productInitialState;

    const action = ProductActions.loadFail({ error: 'error' });
    const result = reducer(state, action);

    expect(result.error).toBe('error');
  });

});
