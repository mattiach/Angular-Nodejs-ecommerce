import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { HeaderComponent } from './components/header/header.component';
import { TableProductComponent } from './components/table-product/table-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CarrelloComponent } from './components/carrello/carrello.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableProductComponent,
    DetailProductComponent,
    AllGamesComponent,
    ContactUsComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
