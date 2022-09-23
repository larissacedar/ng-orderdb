import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Order } from 'src/app/Model/order';

@Component({
  selector: 'app-all-orders-page',
  templateUrl: './all-orders-page.component.html',
  styleUrls: ['./all-orders-page.component.css']
})
export class AllOrdersPageComponent implements OnInit {
  // IN THE FUTURE, WE WILL BE GETTING THIS DATA FROM MY API.
  orders : Array<Order> = [];
  constructor(public http: HttpClient) { 

  }
//this is a part of component's lifecycle: the component runs this method when the component loads
  ngOnInit(): void {
    this.http.get<Order[]>("http://localhost:9000/orders")
    .subscribe(data => {
      this.orders = data;

    });
  }

}
