import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  platData:any;
  petitDejData:any;
  dessertData:any;
  ngOnInit(): void {
    this.platData= this.service.plats;
    this.petitDejData=this.service.petitDej;
    this.dessertData=this.service.dessert;
  }

}
