import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {

  @Input()
  order_id: any = "placeholder";
  @Input()
  protein: String= "protein"
  @Input()
  price: any = "price";
  @Input()
  yearorder: any = "yearorder";
  @Input()
  customerID: any = "customerID";
  name: String = "";
  completed : boolean = false;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get<Customer>("http://localhost:9000/customer/" + this.customerID)
    .subscribe(data => this.name= data.name);

  }
complet() : void{
  this.completed = !this.completed;

} 
}
