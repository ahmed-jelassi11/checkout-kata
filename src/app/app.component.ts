import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {ProductSelectors} from "./store/product/product.selector";
import {AsyncPipe, NgIf} from "@angular/common";
import {ProductEffects} from "./store/product/product.effects";
import {ProductActions} from "./store/product/product.action";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
