import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    
    canActivate() {
      if ( this.authService.getAuth() ) {
          return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}
