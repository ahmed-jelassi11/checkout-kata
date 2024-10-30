import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideStore} from "@ngrx/store";
import {cartReducer} from "./store/cart/cart.reducer";
import {productReducer} from "./store/product/product.reducer";
import {provideEffects} from "@ngrx/effects";
import {ProductEffects} from "./store/product/product.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      cart: cartReducer,
      product: productReducer
    }),
    provideEffects(
      ProductEffects
    )
  ]
};
