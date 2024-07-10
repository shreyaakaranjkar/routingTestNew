import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Iproduct } from '../models/product';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductresolverService implements Resolve<Iproduct>{

  constructor(private prodServ : ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> | Promise<Iproduct> | Iproduct {
    let getUserId = route.params['productId'];
    return this.prodServ.fetchSingleProduct(getUserId)
  }
}
