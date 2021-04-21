import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
 
 import { CoreModule } from './core/core.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ErrorInterceptorProvidor } from './core/interceptors/error.interceptor';
import { LanguageInterceptorProvidor } from './core/interceptors/language.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { RecordVideoComponent } from './pages/record-video/record-video.component';
  export function tokenGetter() {
  return localStorage.getItem('token');
}
 
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordVideoComponent,
     
    
     
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     CarouselModule.forRoot(),
     BrowserAnimationsModule,
     CoreModule,
     HttpClientModule,
     JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        skipWhenExpired: true,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth']
      }
    }),
         

  ],
  providers: [],
  bootstrap: [AppComponent],
 })
export class AppModule { }
