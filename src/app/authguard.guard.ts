import {Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    var isLogin = this.loginService.isLoggedIn();
    if (!isLogin){
      this.router.navigate(['/connexion']);
    }
    return isLogin;

  }

}
