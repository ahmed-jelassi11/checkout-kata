import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.interface";
import {AsyncPipe, CurrencyPipe, NgIf} from "@angular/common";
import {Store} from "@ngrx/store";
import {CartActions} from "../../store/cart/cart.action";

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product: Product | undefined;

  constructor(private store: Store) {
  }

  addToCart(product: Product, quantity: number){
    this.store.dispatch(CartActions.add({product: product, quantity: quantity}));
  }

  protected readonly onabort = onabort;
}
