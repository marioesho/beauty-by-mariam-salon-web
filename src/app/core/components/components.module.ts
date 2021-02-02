import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MdbBootstrapModule } from '../modules/mdb-bootstrap.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HoursComponent } from './hours/hours.component';
import { LocationComponent } from './location/location.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HoursComponent,
    LocationComponent,
    SocialLinksComponent,
    ParallaxComponent
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
    SocialLinksComponent,
    ParallaxComponent
  ]
})
export class ComponentsModule { }
