import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './index';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffect } from './effects/products.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      ProductsEffect
    ])
  ]
})

export class AppStoreModule {}
