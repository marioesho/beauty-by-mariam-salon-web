import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/app-routing.module';
import { MdbBootstrapModule } from './modules/mdb-bootstrap.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbBootstrapModule,
    ComponentsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbBootstrapModule,
    ComponentsModule
  ]
})
export class CoreModule { }
