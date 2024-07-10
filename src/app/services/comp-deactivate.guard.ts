import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProductComponent } from '../components/products/edit-product/edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class CompDeactivateGuard implements CanDeactivate<EditProductComponent> {
  canDeactivate(
    component: EditProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canDeactive();
    }
    } 
