import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductItemComponent} from './product-item.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {getProductFixture} from "../../store/product/fixtures/product.fixture";
import {CartActions} from "../../store/cart/cart.action";

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
      providers: [provideMockStore({
        initialState: {
          ["product"]: {
            products: [],
            error: ''
          },
          ['cart']: {
            items: []
          }
        }
      })]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  })
  ;

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    const storeSpy = spyOn(store, 'dispatch');
    const product = getProductFixture();
    component.addToCart(product, 1);
    expect(storeSpy).toHaveBeenCalledWith(CartActions.add({product: product, quantity: 1}));
  });
});
