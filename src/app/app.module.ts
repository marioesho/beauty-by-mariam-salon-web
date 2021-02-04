import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { ArtistsModule } from './artists/artists.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SalonServicesComponent } from './salon-services/salon-services.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalonServicesComponent,
    ContactComponent
  ],
  imports: [
    CoreModule,
    ArtistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
