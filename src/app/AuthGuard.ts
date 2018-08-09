import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {environment} from '../environments/environment';

@Injectable()
export class AuthGuardService implements CanActivate {

  // you would usually put this in it's own service and not access it directly!
  // this is just for the sake of the demo.


  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  /*  if (this.env.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }*/
  }

}
