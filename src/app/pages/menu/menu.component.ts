import { Component, OnInit } from '@angular/core';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
