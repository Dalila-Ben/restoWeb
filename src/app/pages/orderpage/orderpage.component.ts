import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderDetailsService) { }
  getPlatOrderId:any;
  orderPlatData:any;
  getDejOrderId:any;
  orderDejData:any;
  ngOnInit(): void {
    this.getPlatOrderId = this.param.snapshot.paramMap.get('id');

    if(this.getPlatOrderId)
    {
      this.orderPlatData= this.service.plats.filter((value)=>{
        return value.id==this.getPlatOrderId;
      })
    }

    this.getDejOrderId= this.param.snapshot.paramMap.get('id');
    if(this.getDejOrderId)
    {
      this.orderDejData= this.service.plats.filter((value)=>{
        return value.id==this.getDejOrderId;
      })
    }
  }

}
