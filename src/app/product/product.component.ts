import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../interfaces/product.model';
import { ProductService } from '../services/product.service';
import { ProductOrderByEnum } from '../_enums/productOrderbyEnum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: ProductModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: ProductModel[]) => {
      this.productList = products;
    });
    this.productService.searchClickedEmmiter.subscribe((value: string) => {
      console.log(value);
      this.onSearch(value);
    });
  }

  onSort(value: string) {
    this.changeProductListSort(value as ProductOrderByEnum);
  }

  onSearch(val: string) {
    this.productService
      .searchProduct(val)
      .subscribe((products: ProductModel[]) => {
        this.productList = products;
      });
    console.log(this.productList);
  }

  changeProductListSort(prop: ProductOrderByEnum): void {
    switch (prop) {
      case ProductOrderByEnum.title_asc:
        this.productList.sort((a, b) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
        break;
      case ProductOrderByEnum.title_dsc:
        this.productList.sort((b, a) =>
          a.title > b.title ? 1 : b.title > a.title ? -1 : 0
        );
        break;
      case ProductOrderByEnum.id_asc:
        this.productList.sort((a, b) => (a.id < b.id ? -1 : 1));
        break;
      case ProductOrderByEnum.id_dsc:
        this.productList.sort((a, b) => (a.id < b.id ? 1 : -1));
        break;
    }
  }
}
