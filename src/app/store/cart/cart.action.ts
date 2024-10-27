import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Product} from "../../models/product.interface";

export const CartActions = createActionGroup({
  source: '[Cart]',
  events: {
    'Add': props<{product : Product, quantity: number}>(),
    'Remove': props<{ product: Product }>(),
    'Modify quantity':props<{ product: Product, modification: number}>(),
    'Clear': emptyProps(),
  },
});
