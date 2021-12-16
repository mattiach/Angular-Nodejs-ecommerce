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

  constructor(
    private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.ProductService.getAllProducts().subscribe((response: IProduct[]) => this.products = response);
  }

  addToCart(item: IProduct) {
    let carrello: IProduct[] = [];
    let carrello_localstorage = localStorage.getItem('carrello');

    // Se esiste il carrello allora la variabile viene riempita con quello che è scritto nel localStorage.
    if (carrello_localstorage) {
      carrello = JSON.parse(carrello_localstorage);
    }

    // Push dell'oggetto iterato nella lista completa dei giochi nel carrello
    carrello.push(item);

    // Set del localStorage con il contenuto del carrello
    localStorage.setItem('carrello', JSON.stringify(carrello));

    // Vai al carrello
    // this.router.navigate(['product/carrello']);
  }
}
