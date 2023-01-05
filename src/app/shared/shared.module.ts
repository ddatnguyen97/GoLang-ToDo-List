import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component'
import { SidedbarComponent } from '../components/sidedbar/sidedbar.component'

@NgModule({
  declarations: [
    NavbarComponent,
    SidedbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SidedbarComponent
  ]
})
export class SharedModule { }
