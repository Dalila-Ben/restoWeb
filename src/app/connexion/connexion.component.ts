import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb:FormBuilder,private dataService:LoginService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
   }
//je recupere mon token
   public get tokenUser(): any {
    return this.dataService.tokenUser;
  }
  //je lui affecte une donnée
  public set tokenUser(token : any) {
    this.dataService.tokenUser = token;
  }

  ngOnInit(): void {  }

  postData(angForm2: any){
    this.dataService.userlogin(angForm2.value.email, angForm2.value.password).pipe(first()).subscribe(
      value => this.getToken(value));

  }

  get email(){return this.angForm.get('email')}
  get password(){return this.angForm.get('password')}

  getToken(value : any): void {
    this.tokenUser = value;
    console.log(this.tokenUser);
    this.router.navigate(['Home']);
  }


}
