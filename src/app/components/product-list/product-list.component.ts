import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {Store} from "@ngrx/store";
import {ProductSelectors} from "../../store/product/product.selector";
import {ProductItemComponent} from "../product-item/product-item.component";
import {Category} from "../../models/category.enum";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Observable} from "rxjs";
import {Product} from "../../models/product.interface";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductItemComponent,
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = this.store.select(ProductSelectors.selectProducts);
  categoryFilter: FormControl<Category | null> = new FormControl(null, []);
  constructor(public store: Store) {
  }

  ngOnInit() {

    this.categoryFilter.valueChanges.subscribe(value => {
        this.products$ = this.store.select(ProductSelectors.selectProductsByCategory(value))
    })
  }

  protected readonly Category = Category;
  protected readonly Object = Object;
}
