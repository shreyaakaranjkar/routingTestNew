import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usersArray : Array<IUser> = [
    {
      userName : 'John',
      userId : '101',
      userRole : 'Admin'
    },
    {
      userName : 'Jane',
      userId : '102',
      userRole : 'User'
    },
    {
      userName : 'Jenny',
      userId : '103',
      userRole : 'Admin'
    },
    {
      userName : 'Mary',
      userId : '104',
      userRole : 'User'
    }
  ]

  fetchAllUsers(){
    return this.usersArray
  }

  fetchSingleUser(id:string){
    return this.usersArray.find(user => user.userId === id) as IUser
  }

  createNewUser(userObj : IUser){
    this.usersArray.push(userObj)
  }

  updateUser(updatedUser : IUser){
    let getIndex = this.usersArray.findIndex(user => user.userId === updatedUser.userId);
    this.usersArray[getIndex] = updatedUser
  }

  deleteUser(delId:string){
    let getDelId = this.usersArray.findIndex(user => user.userId === delId)
    this.usersArray.splice(getDelId,1)
  }
}
