import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {CartSelectors} from "../../store/cart/cart.selector";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {CartActions} from "../../store/cart/cart.action";
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {Category} from "../../models/category.enum";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    NgOptimizedImage,
    CurrencyPipe,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems$ = this.store.select(CartSelectors.selectCartItems);
  cartItemsQuanity$ = this.store.select(CartSelectors.selectCartItemsQuantity);
  totalTTC$ = this.store.select(CartSelectors.selectCartTotalTTC);
  totalTaxes$ = this.store.select(CartSelectors.selectCartTotalTaxes);
  isEmpty$ = this.store.select(CartSelectors.isCartEmpty);

  constructor(private store: Store) {
  }

  remove(productId: number) {
      this.store.dispatch(CartActions.remove({productId: productId}));
  }

  protected readonly Category = Category;
  protected readonly Object = Object;

  clearCart() {
    this.store.dispatch(CartActions.clear());
  }
}
