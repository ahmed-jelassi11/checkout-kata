import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartComponent} from './cart.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {provideRouter} from "@angular/router";
import {AppComponent} from "../../app.component";
import {ProductActions} from "../../store/product/product.action";
import {CartActions} from "../../store/cart/cart.action";

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent],
      providers:[ provideRouter([]),provideMockStore({
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

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch remove item',()=>{
    const storeSpy = spyOn(store, 'dispatch');
    component.remove(1);
    expect(storeSpy).toHaveBeenCalledWith(CartActions.remove({productId: 1}));
  })
  it('should dispatch clear cart',()=>{
    const storeSpy = spyOn(store, 'dispatch');
    component.clearCart();
    expect(storeSpy).toHaveBeenCalledWith(CartActions.clear());
  })
});
