import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product, ProductsService} from '../shared/products.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  public product: Product = {};
  public productExist = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
  }

  validate(): boolean {
    if (this.product?.title.trim().length < 3) {
      alert('Title must be more than 3 characters');
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productsService.fetchById(id).subscribe(response => {
        this.product = response;
      });
      this.productExist = true;
    }
  }

  onCreate(): void {
    this.validate();
    this.productsService.createProduct(this.product)
      .subscribe(() => this.router.navigate(['']));
  }

  onEdit(): void {
    this.validate();
    this.productsService.editProduct(this.product)
      .subscribe(() => this.router.navigate(['']));
  }

  onDelete(): void {
    this.productsService.deleteProduct(this.product.id)
      .subscribe(() => this.router.navigate(['']));
  }
}
