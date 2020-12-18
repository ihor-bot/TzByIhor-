import {Action} from '@ngrx/store';

export enum ProductsActionTypes {
  GET_PRODUCTS = '[PRODUCTS] Fetch products requested',
  // CREATE_PRODUCT = '[PRODUCTS] Create products success',
  // EDIT_PRODUCT = '[PRODUCTS] Edit products success',
  // DELETE_PRODUCT = '[PRODUCTS] Delete products success',
  FETCH_PRODUCTS_ERROR = '[PRODUCTS] Fetch products failed'
}

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS;
  constructor(public payload?: unknown) {}
}
// export class CreateProduct implements Action {
//   readonly type = ProductsActionTypes.CREATE_PRODUCT;
//   constructor(public payload: string) {}
// }
// export class EditProduct implements Action {
//   readonly type = ProductsActionTypes.EDIT_PRODUCT;
//   constructor(public payload: string) {}
// }
// export class DeleteProduct implements Action {
//   readonly type = ProductsActionTypes.DELETE_PRODUCT;
//   constructor(public payload: string) {}
// }
export class ErrorProduct implements Action {
  readonly type = ProductsActionTypes.FETCH_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

export type ProductsActionsUnion = GetProducts  |
  // CreateProduct |
  // EditProduct |
  // DeleteProduct  |
  ErrorProduct;

