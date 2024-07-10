import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId! : string;
  userObj! : IUser

  constructor(private userServ : UserService, private route : ActivatedRoute,
              private router : Router
  ) { }

  ngOnInit(): void {
     this.route.params.subscribe((params:Params)=>{
      this.userId = params['userId']
      this.userObj = this.userServ.fetchSingleUser(this.userId)
    })
    console.log(this.userId);
  }

  deleteUser(){
    this.userServ.deleteUser(this.userId)
    alert('User Deleted Successfully')
    this.router.navigate(['/users'])
  }

}
