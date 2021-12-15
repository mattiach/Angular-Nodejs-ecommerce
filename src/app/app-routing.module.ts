import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { TableProductComponent } from './components/table-product/table-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { CarrelloComponent } from './components/carrello/carrello.component';


// creare rotte
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TableProductComponent
  },
  {
    path: 'productlist',
    component: TableProductComponent
  },
  {
    path: 'product/:id/detail',
    component: DetailProductComponent
  },
  {
    path: 'product/games',
    component: AllGamesComponent
  },
  {
    path: 'contattaci',
    component: ContactUsComponent
  },
  {
    path: 'product/carrello',
    component: CarrelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
