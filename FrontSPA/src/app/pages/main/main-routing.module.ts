import { MainComponent } from './main.component';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordVideoComponent } from '../record-video/record-video.component';
 
 
const routes: Routes = [
  
  {
    path: '', component: MainComponent,children:[
       
  
  {
    path:'' ,redirectTo:'home'
  },
     {
    path: 'home',component:HomeComponent
     
  },
  
  {
    path:'record' ,component:RecordVideoComponent
  } 
]
  } ,
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
