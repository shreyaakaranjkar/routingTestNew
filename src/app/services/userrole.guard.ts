import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserroleGuard implements CanActivate {

  constructor(private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loginUserRole : string = localStorage.getItem("UserRole")!

    let userRoleArr : Array<string> = route.data['UserRole']

    if(userRoleArr.includes(loginUserRole)){
      return true
    }
    else{
      const UrlTree : UrlTree = this.router.createUrlTree(['home'])
      return UrlTree
    }
  }
  
}
