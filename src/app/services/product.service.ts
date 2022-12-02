import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { ProductMock } from 'src/assets/_mocks/productMock';
import { ProductModel } from '../interfaces/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  searchClickedEmmiter = new EventEmitter<string>();
  constructor(private https: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    const productsJson = localStorage.getItem('productList');
    if (productsJson) return of(JSON.parse(productsJson));

    localStorage.setItem('productList', JSON.stringify(ProductMock));
    return of(ProductMock);
  }

  getProduct(id: string) {
    return this.getProducts().pipe(map((s) => s.find((a) => a.id === id)));
  }

  getProductName(id: string) {
    const productsJson = localStorage.getItem('productList');
    if (productsJson) {
      let data: ProductModel[];
      data = JSON.parse(productsJson);
      // return data.find((b) => b.id === +id)?.firstName;
      return data.find((b) => b.id === id)?.title;
    }
    return '';
  }

  addProduct(productData: ProductModel): Observable<string> {
    this.getProducts().subscribe(function (productList) {
      productList.push(productData);
      localStorage.setItem('productList', JSON.stringify(productList));
    });

    return of('success');
  }

  updateProduct(id: string, productData: ProductModel): Observable<string> {
    this.getProducts().subscribe(function (productList) {
      productList = productList.filter((product) => product.id !== id);
      productList.push(productData);
      localStorage.setItem('studentList', JSON.stringify(productList));
    });
    return of('success');
  }

  searchProduct(name: string) {
    return this.getProducts().pipe(
      map((s) =>
        s.filter((a) =>
          a.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
      )
    );
  }
}
