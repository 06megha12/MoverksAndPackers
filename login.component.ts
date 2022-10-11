import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  msg='';
  constructor(private _service : RegistrationService , private _router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
    data => {
      console.log("Response Received"),
      this._router.navigate(['/loginsuccess'])
  },
    error => {
       console.log("Exception Occured");
       this.msg="Bad Credentials, Please Enter valid email_Id and Password.";
      }
    )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])
  
  }


}
