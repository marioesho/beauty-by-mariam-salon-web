import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from '../../home/home.component';
import { SalonServicesComponent } from '../../salon-services/salon-services.component';
import { ArtistsComponent } from '../../artists/artists.component';
import { ArtistDetailComponent } from '../../artists/artist-detail/artist-detail.component';
import { ContactComponent } from '../../contact/contact.component';

// Guards
import { ArtistDetailResolver } from '../../artists/artist-detail/artist-detail.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: SalonServicesComponent },
  { path: 'artists', children: [
      { path: '', component: ArtistsComponent, pathMatch: 'full' },
      { path: 'artist-detail/:artist', component: ArtistDetailComponent, resolve: [ArtistDetailResolver] }
    ]
  },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }