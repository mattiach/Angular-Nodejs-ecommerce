import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() carrello!: IProduct[];
  @Input() total!: number;

  constructor() { }

  ngOnInit(): void {
    let carrello_localstorage = localStorage.getItem('carrello');

    if (carrello_localstorage) {
      this.carrello = JSON.parse(carrello_localstorage);
    }

    this.totalCart();

    setTimeout(() => { this.ngOnInit() }, 10)
  }

  totalCart() {
    this.total = 0;
    this.carrello.forEach(element => this.total += element.price);
  }

}
