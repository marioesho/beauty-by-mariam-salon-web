import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../modules/angular-material.module';
import { SparkAngularModule } from '../modules/spark-angular.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    SparkAngularModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    IconsComponent
  ]
})
export class ComponentsModule { }
