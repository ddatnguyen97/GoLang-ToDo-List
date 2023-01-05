import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../components/navbar/navbar.component'
import { SidedbarComponent } from '../components/sidedbar/sidedbar.component'
import { NbIconModule, NbCalendarModule } from '@nebular/theme'

@NgModule({
  declarations: [
    NavbarComponent,
    SidedbarComponent
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbCalendarModule
  ],
  exports:[
    NavbarComponent,
    SidedbarComponent
  ]
})
export class SharedModule { }
