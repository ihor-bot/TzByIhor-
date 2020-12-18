import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleComponent} from './single.component';
import {SingleRoutingModule} from './single-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SingleComponent,
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    FormsModule,
  ]
})
export class SingleModule {
}
