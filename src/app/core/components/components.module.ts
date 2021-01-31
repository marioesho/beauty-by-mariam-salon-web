import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../modules/angular-material.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
