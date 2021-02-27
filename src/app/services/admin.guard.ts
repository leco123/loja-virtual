import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    //private auth: AuthService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('next: ', next);
    console.log('state: ', state);

   /* if (this.auth.token === null || this.auth.token === undefined) {
      this.router.navigateByUrl('login');
      return false;
    }*/
    return true;
  }

}
