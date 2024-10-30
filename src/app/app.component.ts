import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Store} from "@ngrx/store";
import {ProductActions} from "./store/product/product.action";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(ProductActions.load())
  }


}
