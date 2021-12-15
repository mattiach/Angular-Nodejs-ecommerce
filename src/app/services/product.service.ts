import { IProduct } from './../interfaces/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAPI = 'http://localhost:3000/product/';

  constructor(private http: HttpClient) {}


  getProduct(id: number) {
    return this.http.get<IProduct>(this.urlAPI+id);
  }

  getAllProducts() {
    return this.http.get<IProduct[]>(this.urlAPI);
  }

  removeProducts(product: IProduct) {
    return this.http.delete<IProduct[]>(this.urlAPI+product.id);
  }
}
