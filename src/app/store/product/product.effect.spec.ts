import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {ProductEffects} from "./product.effects";
import {TestBed} from "@angular/core/testing";
import {ProductService} from "../../services/product.service";
import {instance, mock, verify, when} from "ts-mockito";
import {provideMockActions} from "@ngrx/effects/testing";
import {ProductActions} from "./product.action";
import {Product} from "../../models/product.interface";
import {cold, hot} from "jasmine-marbles";
import {Category} from "../../models/category.enum";

describe('ProductEffects', () => {
  let actions$: Observable<Action>;
  let effects: ProductEffects;
  let mockProductService: ProductService;
  beforeEach(() => {
    mockProductService = mock(ProductService);
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        {provide: ProductService, useFactory: () => instance(mockProductService)},
        provideMockActions(() => actions$)
      ]
    });
    effects = TestBed.inject(ProductEffects);
  });

  it('should load products with success', () => {
    const products: Product[] = [{
      id: 1,
      productName: 'productNameTest',
      category: Category.Food,
      isImported: false,
      price: 1,
      quantity: 1
    }];

    when(mockProductService.getAll()).thenReturn(of(products));

    actions$ = hot('a', {a: ProductActions.load()});

    const expected$ = cold('b', {
      b: ProductActions.loadSuccess({products}),
    });

    expect(effects.load$).toBeObservable(expected$);
    verify(mockProductService.getAll()).once();
  });

});
