import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Product} from "../../models/product.interface";

export const ProductActions = createActionGroup({
  source: '[Product]',
  events: {
    'Load': emptyProps(),
    'Load success': props<{ products: Product[] }>(),
    'Load fail': props<{ error: string }>(),
  },
});
