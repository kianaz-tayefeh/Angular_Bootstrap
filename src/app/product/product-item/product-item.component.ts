import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  @Input() tags!: string[];

  constructor() {}

  ngOnInit(): void {
    this.tags = this.product.tags;
  }
}
