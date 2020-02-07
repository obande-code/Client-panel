import { Component, OnInit } from '@angular/core';
import { Client } from "../../file/Client";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : boolean;
  loggedInUser : String;
  showRegistered : boolean;

  constructor(private flashMessagesService: FlashMessagesService,
    private authService : AuthService,
    private router : Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else{
        this.isLoggedIn = false;
      }
  })
  }
  onLogoutClick(){
    this.authService.logOut();
    this.flashMessagesService.show('You are looged out', {cssClass : 'alert-success', timeout : 4000});
    this.router.navigate(['/login']);

  }

}
