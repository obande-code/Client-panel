import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  email : string;
  password: string;
  constructor(
             private authService : AuthService,
             private router : Router, 
             private flashMessages : FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.authService.register(this.email, this.password)
    .then(res =>{
      this.flashMessages.show('You are registered and logged in', {cssClass : "alert-success", timeout:10000});
      this.router.navigate(['/'])
    })
    .catch(err => {
     this.flashMessages.show('Kindly input all details correctly', {cssClass : "alert-danger", timeout:10000});
    })
 }
}
