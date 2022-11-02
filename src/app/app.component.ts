import { Component } from '@angular/core';
import { DessertService } from './services/dessert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoweb';
  constructor(private dessertService:DessertService){

  }
}
