import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdbBootstrapModule } from '../modules/mdb-bootstrap.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HoursComponent } from './hours/hours.component';
import { LocationComponent } from './location/location.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HoursComponent,
    LocationComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MdbBootstrapModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HoursComponent,
    LocationComponent,
    SocialLinksComponent
  ]
})
export class ComponentsModule { }
