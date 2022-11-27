import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { NouvellesRecettesService } from 'src/app/services/nouvelles-recettes.service';
import { RecettesService } from 'src/app/services/recettes.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  nom!: string;
  recette!: string;


  ngOnInit(): void {

  }
  constructor(
    private fb: FormBuilder,
    private NouvellesRecettesService: NouvellesRecettesService,
    private router: Router
  ) {
    // this.form = this.fb.group({
    //   nom: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    //   recette: ['', [Validators.required]]
    // });
  }

  getNvRecettes(f: NgForm) {
    let nom;
    let recette;
    nom = f.value.nom == "" ? null : f.value.nom;
    recette = f.value.recette == "" ? null : f.value.recette;
    this.postData(nom, recette);
    console.log();

  }
  postData(nom: string, recette:string) {
    this.NouvellesRecettesService
      .getnvRecettes(
        nom,
        recette
      )
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['Menu']);
        },
        (error) => {}
      );
  }



}
