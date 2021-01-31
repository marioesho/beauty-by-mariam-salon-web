import { NgModule } from '@angular/core';

import { AngularMaterialModule } from './modules/angular-material.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    AngularMaterialModule,
    ComponentsModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class CoreModule { }
