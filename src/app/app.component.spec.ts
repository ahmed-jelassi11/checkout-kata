import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {provideRouter} from "@angular/router";
import {ProductActions} from "./store/product/product.action";
import {CartComponent} from "./components/cart/cart.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([]),
        provideMockStore({
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
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load product action',()=>{
    const storeSpy = spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(storeSpy).toHaveBeenCalledWith(ProductActions.load());
  })

});
