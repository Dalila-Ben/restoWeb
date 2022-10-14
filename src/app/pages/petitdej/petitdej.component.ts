import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-petitdej',
  templateUrl: './petitdej.component.html',
  styleUrls: ['./petitdej.component.css']
})
export class PetitdejComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  petitDejData:any;
  ngOnInit(): void {
    this.petitDejData=this.service.petitDej;
  }

}
