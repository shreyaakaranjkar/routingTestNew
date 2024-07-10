import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userForm! : FormGroup;
  userId! : string;
  userObj!:IUser;
  isInEditMode! : boolean

  constructor(private userserv : UserService, private route : ActivatedRoute, 
              private uuidServ : UuidService, private router : Router ) { }

  ngOnInit(): void {
    this.createUserForm();

     this.route.params
    .subscribe((params :Params) => {
      this.userId=params['userId']

      if(this.userId){
        this.isInEditMode = true
        this.userObj = this.userserv.fetchSingleUser(this.userId)
        this.userForm.patchValue(this.userObj)
      }
      
      if(this.userObj.userRole === 'User'){
        this.userForm.disable()
      }
    })
    
  }

  onFormSubmit(){
    if(this.userForm.valid){
      let userNewObj = {...this.userForm.value, userId : this.uuidServ.uuid()}
      this.userserv.createNewUser(userNewObj);
      this.router.navigate(['/users'])
    }
  }

  //onUserUpdate
  onUserUpdate(){
    let updatedUser = {...this.userForm.value, userId : this.userId }
    this.userserv.updateUser(updatedUser)
    this.router.navigate(['/users'])
  }

  createUserForm(){
    this.userForm = new FormGroup({
      userName : new FormControl(null, Validators.required),
      userRole : new FormControl(null, Validators.required)
    })
  }

  canDeactive(){
    if(this.userForm.dirty){
      return confirm('Are You Sure You want to leave this page?')
    }
    return true
  }
}
