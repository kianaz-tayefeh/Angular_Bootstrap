import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {
  ProductOrderByEnum,
  ProductOrderByLabelMapping,
} from 'src/app/_enums/productOrderbyEnum';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css'],
})
export class ProductSortComponent {
  public ProductOrderByLabelMapping: any = ProductOrderByLabelMapping;
  public ProductOrderBys = Object.values(ProductOrderByEnum);
  @Output() sortClickedEmmiter = new EventEmitter<string>();
  // @Output() searchClickedEmmiter = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onChangeSort(val: string) {
    this.sortClickedEmmiter.emit(val);
  }

  onClickSearch(val: string) {
    // this.searchClickedEmmiter.emit(val);
    this.productService.searchClickedEmmiter.emit(val);
  }
}
