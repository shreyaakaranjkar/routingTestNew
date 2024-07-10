import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditUserComponent } from '../components/users/edit-user/edit-user.component';

@Injectable({
  providedIn: 'root'
})
export class UserdeactivateGuard implements CanDeactivate<EditUserComponent> {
  canDeactivate(
    component: EditUserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canDeactive()
    }
    } 
