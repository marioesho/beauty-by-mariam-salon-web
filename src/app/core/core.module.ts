import { NgModule } from '@angular/core';

import { MdbBootstrapModule } from './modules/mdb-bootstrap.module';
import { ComponentsModule } from './components/components.module';
import { GuardsModule } from './guards/guards.module';

@NgModule({
  imports: [
    MdbBootstrapModule,
    ComponentsModule,
    GuardsModule
  ],
  exports: [
    MdbBootstrapModule,
    ComponentsModule
  ]
})
export class CoreModule { }
