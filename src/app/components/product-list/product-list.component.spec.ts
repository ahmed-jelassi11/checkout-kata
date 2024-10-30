import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductListComponent} from './product-list.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {FormControl} from "@angular/forms";
import {getProductArrayFixture} from "../../store/product/fixtures/product.fixture";
import {Category} from "../../models/category.enum";
import {ProductSelectors} from "../../store/product/product.selector";
import {of} from "rxjs";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
      providers:[ provideMockStore({
        initialState: {
          ["product"]:{
            products: [],
            error: ''
          },
          ['cart']:{
            items: []
          }
        }
      })]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.categoryFilter = new FormControl(); // initialize categoryFilter
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
