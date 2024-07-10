import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authServ : AuthService, private router : Router) { }

  haveAccount : boolean = true;
  loginForm! : FormGroup;
  signUpForm! : FormGroup;

  ngOnInit(): void {
    this.createLoginForm()
    this.createSignUpFOrm()
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null,Validators.required),
      password : new FormControl(null, Validators.required)
    })
  }

  createSignUpFOrm(){
    this.signUpForm = new FormGroup({
      fullname : new FormControl(null,Validators.required),
      email : new FormControl(null,Validators.required),
      password : new FormControl(null, Validators.required),
      confirmPassword : new FormControl(null,Validators.required),
      contact : new FormControl(null,Validators.required)
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      let obj = this.loginForm.value
      this.authServ.logIn(obj);
      this.router.navigate(['home'])
    }
    else{
      alert('Please enter valid details')
    }
  }
  onSignUp(){
    this.router.navigate(['home'])
  }
}
