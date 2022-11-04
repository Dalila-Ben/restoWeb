import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { PetitDejService } from 'src/app/services/petit-dej.service';

@Component({
  selector: 'app-petitdej',
  templateUrl: './petitdej.component.html',
  styleUrls: ['./petitdej.component.css']
})
export class PetitdejComponent implements OnInit {
  petitDejData : any = [];

  constructor(private petiDejService:PetitDejService) { }

  ngOnInit(): void {
    this.getPetitDej();
  }

  getPetitDej(){
    this.petiDejService.getPetitDej().subscribe(
      data => {
        this.petitDejData= data;
      },
      error => {
        console.log(error);

      }
    )
  }

}
