import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../modules/angular-material.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
