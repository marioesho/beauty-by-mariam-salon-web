import { NgModule } from '@angular/core';

import { MdbBootstrapModule } from './modules/mdb-bootstrap.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    MdbBootstrapModule,
    ComponentsModule
  ],
  exports: [
    MdbBootstrapModule,
    ComponentsModule
  ]
})
export class CoreModule { }
