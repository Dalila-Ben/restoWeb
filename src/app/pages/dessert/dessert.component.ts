import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  dessertData:any;
  ngOnInit(): void {
    this.dessertData=this.service.dessert;
  }

}
