import {ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromProducts from './reducers/products.reducer';

export type State = {
};

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('action', action);
    console.log('state', state);
    return reducer(state, action);
  };
}

export const getProducts = (state) => state.products.products;

export const metaReducers: MetaReducer<State> [] = !environment.production
  ? [logger]
  : [];
