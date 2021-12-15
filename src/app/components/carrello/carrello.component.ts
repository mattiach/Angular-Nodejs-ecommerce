import { IProduct } from './../../interfaces/iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  carrello: IProduct[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    let carrello_localstorage = localStorage.getItem('carrello');

    if(carrello_localstorage) {
      this.carrello = JSON.parse(carrello_localstorage);
    }
    this.totalCart();
  }

  totalCart() {
    this.carrello.forEach(element => this.total += element.price);
  }

}
