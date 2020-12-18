import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {apiUri} from '../config';

export type Product = {
  id?: number
  title?: string
};

@Injectable({providedIn: 'root'})
export class ProductsService {

  public products: Product[] = [];
  public product: Product = null;
  private productsUri = `${apiUri}/posts`;

  constructor(private http: HttpClient) {
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUri)
      .pipe(tap(products => this.products = products));
  }

  fetchById(id): Observable<Product> {
    return this.http.get<Product>(`${this.productsUri}/${id}`)
      .pipe(tap(product => this.product = product));
  }

  createProduct(newDate: Product): Observable<Product> {
    return this.http.post<any>(this.productsUri, newDate);
  }

  editProduct(newDate: Product): Observable<Product> {
    return this.http.put<any>(`${this.productsUri}/${newDate.id}`, newDate);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<any>(`${this.productsUri}/${id}`);
  }
}
