import { Component, OnInit } from '@angular/core';
import { RecettesService } from 'src/app/services/recettes.service';
import { NouvellesRecettesService } from 'src/app/services/nouvelles-recettes.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  recettesData : any = [];
  nouvelleData: any =[];

  constructor(private recettesService:RecettesService, private nouvelleRecettes: NouvellesRecettesService) { }

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

    // getNvRecettes(){
    //   this.nouvelleRecettes.nvRecettes().subscribe(
    //     data => {
    //       this.nouvelleData= data;
    //       console.log(data);

    //     },
    //     error => {
    //       console.log(error);

    //     });
    //   }
  }
