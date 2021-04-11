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
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HoursComponent,
    LocationComponent,
    SocialLinksComponent,
    ParallaxComponent,
    ListComponent,
    PageNotFoundComponent,
    CarouselComponent
  ],
  imports: [
    AuthModule,
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
    ParallaxComponent,
    ListComponent,
    CarouselComponent
  ]
})
export class ComponentsModule { }
