import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ProductsService } from '../../shared/products.service';
import {ErrorProduct, GetProducts, ProductsActionTypes} from '../actions/products.actions';


@Injectable()
export class ProductsEffect {
  @Effect()
  getProducts$: Observable<Action> = this.actions$
    .pipe(
      ofType<GetProducts>(ProductsActionTypes.GET_PRODUCTS),
      exhaustMap(
        action => this.productsService.fetchProducts().pipe(
          map(data => {
            return new GetProducts(data);
          }),
          catchError(err => {
            return of(new ErrorProduct(err));
          })
        )
      )
    );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) {}
}
