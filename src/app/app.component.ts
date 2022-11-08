import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restoweb';

  private httpOptions={
    'headers':new HttpHeaders({
      'Content-Type': 'application/json',
      'Access_control-Allow-Origin:': '*',
    })
  }
  constructor(){
    // private dessertService:DessertService
  }
}
