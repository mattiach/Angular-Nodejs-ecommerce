import { IProduct } from './../../interfaces/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe(response => this.products = response);
  }

  deleteProduct(item: IProduct) {
    this.ProductService.removeProducts(item).subscribe(response =>{
      this.ProductService.getAllProducts().subscribe(response => this.products = response);
    });
  }

  detailProduct(item: IProduct) {
    this.router.navigate(['product', item.id, 'detail']);
  }
}
