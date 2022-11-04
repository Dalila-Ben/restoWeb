import { Component, OnInit } from '@angular/core';
import { DessertService } from 'src/app/services/dessert.service';
import { Dessert } from 'src/app/models/dessert';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {



  // dessertData:any;
  dessertData : any = [];

  // private service:OrderDetailsService

  constructor(private dessertService:DessertService) { }
  ngOnInit(): void {

    this.getDessert();
    // this.dessertData=this.service.dessert;
  }
  getDessert(){
    console.log('test');

    this.dessertService.getDessert().subscribe(
      data => {
        this.dessertData = data;
        console.log(data);
      },
      error => {
        console.log(error);

      }

    )
  }


}
