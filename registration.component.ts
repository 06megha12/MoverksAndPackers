import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();
  msg='';
  constructor(private registerService:RegistrationService) { }

  ngOnInit(): void {
  }
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{
      alert("Successfully Registered!!!")
    },error=>alert("User is already exist"));
  }

}
