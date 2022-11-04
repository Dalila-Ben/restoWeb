import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { PlatsService } from 'src/app/services/plats.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  platData : any = [];

  constructor(private platService:PlatsService) { }

  ngOnInit(): void {
    this.getPlats();
  }

  getPlats(){
    console.log('test');

    this.platService.getPlats().subscribe(
      data => {
        this.platData= data;
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )

  }

}
