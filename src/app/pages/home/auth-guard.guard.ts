import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if(localStorage.getItem('currentUser')!= null){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  

  
}
