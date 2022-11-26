import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { CommonModule, Time } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recettesData : any = [];

  constructor(private recettesService:RecettesService) { }

  ngOnInit(): void {
    this.getRecettes();
  }

  getRecettes(){
    this.recettesService.getRecettes().subscribe(
      data => {
        this.recettesData= data;
        console.log(data);

      },
      error => {
        console.log(error);

      });
    }

}
