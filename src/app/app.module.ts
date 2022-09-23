import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { AllOrdersPageComponent } from './pages/all-orders-page/all-orders-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderCardComponent,
    AllOrdersPageComponent,
    AddPageComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
