import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../modules/angular-material.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
