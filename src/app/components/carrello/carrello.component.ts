import { IProduct } from 'src/app/interfaces/iproduct';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  @Output() carrello: IProduct[] = [];
  @Output() total: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let carrello_localstorage = localStorage.getItem('carrello');

    if (carrello_localstorage) {
      this.carrello = JSON.parse(carrello_localstorage);
    }

    this.totalCart();
  }

  aggiorna() {
    setTimeout(() => { this.ngOnInit() }, 500)
  }


  totalCart() {
    this.total = 0;
    this.carrello.forEach(element => this.total += element.price);
  }


  removeProdut(item: IProduct) {
    this.carrello = this.carrello.filter(element => element !== item);

    this.totalCart();
    localStorage.setItem('carrello', JSON.stringify(this.carrello));
  }
}
