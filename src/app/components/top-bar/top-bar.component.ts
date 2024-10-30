import {Component, Input} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {Store} from "@ngrx/store";
import {CartSelectors} from "../../store/cart/cart.selector";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf,
    NgClass,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  @Input() title: string= '';
  cartItemsQuantity$= this.store.select(CartSelectors.selectCartItemsQuantity);
  isCartEmpty$= this.store.select(CartSelectors.isCartEmpty);

  constructor(private store:Store) {
  }
}
