import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  LocalStorage, SessionStorage } from 'ngx-store';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  @SessionStorage({key: 'userId'}) userId = '';

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isSignInPath = route.data['isSignInPath'];
    if (this.userId !== '') {
      return !isSignInPath;
    } else {
      if (!isSignInPath) {
        this.router.navigate(['/signIn'], {
          queryParams: {
            return: state.url
          }
        });
        return false;
      } else {
        return true;
      }
    }
  }

  islogged() {
    return this.userId !== '';
  }

  setUserId(userId) {
    this.userId = userId;
  }
}
