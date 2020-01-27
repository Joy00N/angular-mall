import {Component, OnInit} from '@angular/core';

import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductComponent implements OnInit {

  pageTitle: string = 'Yoon Factory';
  showImage: boolean = true;
  imageWidth: number = 50;
  imageMargin: number = 2;
  _listFilter: string = '';
  filteredList: IProduct[];
  productList: IProduct[];
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredList = this._listFilter ? this.performFilter(this._listFilter) : this.productList;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.productList = products;
        this.filteredList = products;
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productList.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
