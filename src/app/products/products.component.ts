import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {State} from '../store';
import {Store} from '@ngrx/store';
import {GetProducts} from '../store/actions/products.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private readonly store: Store<State>, readonly productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProducts());
  }

}
