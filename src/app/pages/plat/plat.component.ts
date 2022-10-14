import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  platData:any;
  ngOnInit(): void {
    this.platData= this.service.plats;
  }

}
