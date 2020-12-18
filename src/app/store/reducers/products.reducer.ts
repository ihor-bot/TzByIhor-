import {ProductsActionsUnion, ProductsActionTypes} from '../actions/products.actions';
import {Product} from '../../shared/products.service';

export interface State {
  products: Array<Product>;
  isFailed: boolean;
}

export const initialState: State = {
  products: [],
  isFailed: false
};

export const reducer = (state: State = initialState, action: ProductsActionsUnion) => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    // case ProductsActionTypes.CREATE_PRODUCT:
    //   return {
    //     ...state,
    //     products: action.payload
    //   };
    // case ProductsActionTypes.EDIT_PRODUCT:
    //   return {
    //     ...state,
    //     products: action.payload
    //   };
    // case ProductsActionTypes.GET_USER_POST_ADD_COMMENT_SUCCESS:
    //   return {
    //     ...state,
    //     isUserPostAddComment: action.payload
    //   };
    case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        isFailed: action.payload
      };
    default:
      return state;
  }
};
