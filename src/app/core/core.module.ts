import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './modules/angular-material.module';
import { SparkAngularModule } from './modules/spark-angular.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    AngularMaterialModule,
    SparkAngularModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class CoreModule { }
