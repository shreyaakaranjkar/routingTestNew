import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserresolverService implements Resolve<IUser>{

  constructor(private userServ : UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
      let getUserId = route.params['userId'];
      return this.userServ.fetchSingleUser(getUserId)
  }
}
