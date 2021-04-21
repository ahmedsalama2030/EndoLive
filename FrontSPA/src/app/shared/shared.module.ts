 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import * as fromDirective from './directives';
import * as fromPipes from './components/Pipes';
   import { RouterModule } from '@angular/router';
 


@NgModule({
  declarations: [ fromDirective.directives,fromPipes.pipes],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [fromDirective.directives]

})
export class SharedModule { }
