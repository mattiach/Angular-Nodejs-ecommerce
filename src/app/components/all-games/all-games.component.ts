import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {

  products: IProduct[] = [];


  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe((response: IProduct[]) => this.products = response);
  }

}
