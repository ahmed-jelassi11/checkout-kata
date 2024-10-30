import {Injectable} from "@angular/core";
import {ProductActions} from "./product.action";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../../services/product.service";

@Injectable()
export class ProductEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.load),
      switchMap(() => {
        return this.productService.getAll().pipe(
          map(result => ProductActions.loadSuccess({ products: result })),
          catchError((error: HttpErrorResponse) =>
            of(ProductActions.loadFail({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}

