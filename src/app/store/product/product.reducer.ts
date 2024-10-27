import {productInitialState, ProductState} from "./product.state";
import {Action, createReducer, on} from "@ngrx/store";
import {ProductActions} from "./product.action";


const reducer = createReducer<ProductState>(
  productInitialState,
  on(ProductActions.load, (state, action): ProductState => {
    return {
      ...state,
    };
  }),
  on(ProductActions.loadSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error: '',
    };
  }),
  on(ProductActions.loadFail, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
    };
  })
);

export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return reducer(state, action);
}
