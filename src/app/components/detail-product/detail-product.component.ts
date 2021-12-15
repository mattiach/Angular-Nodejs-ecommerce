import { IProduct } from './../../interfaces/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  detailProduct!: IProduct;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.ProductService.getProduct(element.id).subscribe(product => this.detailProduct = product);
      }
    });
  }

  addToCart() {
    let carrello : IProduct[] = [];
    let carrello_localstorage = localStorage.getItem('carrello');

    // Se esiste il carrello allora la variabile viene riempita con quello che è scritto nel localStorage.
    if(carrello_localstorage) {
      carrello = JSON.parse(carrello_localstorage);
    }

    // Ogni volta che viene richiamato il metodo ci sarà sempre il push dell'oggetto e verrà reimpostato il localStorage con il contenuto della variabile.
    carrello.push(this.detailProduct);
    localStorage.setItem('carrello', JSON.stringify(carrello));
    this.router.navigate(['product/carrello']);
  }


}
