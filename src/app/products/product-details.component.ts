import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {IProduct} from './product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.onProductRetrieved(product),
      error: err => this.errorMessage = err
    });
  }

  onProductRetrieved(product: IProduct): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }
}
