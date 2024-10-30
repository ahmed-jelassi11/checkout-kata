import {Routes} from '@angular/router';
import {ProductListComponent} from "./components/product-list/product-list.component";
import {CartComponent} from "./components/cart/cart.component";

export const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'checkout',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
