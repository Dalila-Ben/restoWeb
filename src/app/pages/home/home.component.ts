import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { CommonModule, Time } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  platData:any;
  platMoment: any;
  ngOnInit(): void {
    this.platData = this.service.plats;

  }

}
