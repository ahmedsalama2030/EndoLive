import { AuthService } from './core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedTokenUser } from './core/models/Dtos/decodedTokenUser';
 
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css'],
   
 
})
export class AppComponent implements OnInit {
  jwthelper = new JwtHelperService();
  decodedToken?:DecodedTokenUser;

constructor(public authService:AuthService){

}
  ngOnInit(): void {
    const token = localStorage.getItem('token') ;
    const user: any = JSON.parse(localStorage.getItem('user') !);

    if (token) {
      this.authService.decodedToken = this.jwthelper.decodeToken(token);
     }
    if (user) {
      this.authService.user = user;
     }

     this.authService.language.next(localStorage.getItem('lang')||'en');
  }
  title = 'app';
}
