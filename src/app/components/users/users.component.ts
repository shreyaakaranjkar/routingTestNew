import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersInfo! : Array<IUser>
  selectedId! : string;
  
  constructor(private userServ : UserService) { }

  ngOnInit(): void {
    this.usersInfo = this.userServ.fetchAllUsers()
  }

}
