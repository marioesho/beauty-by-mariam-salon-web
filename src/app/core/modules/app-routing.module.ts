import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AuthComponent } from '../components/auth/auth.component';
import { HomeComponent } from '../../home/home.component';
import { SalonServicesComponent } from '../../salon-services/salon-services.component';
import { ArtistsComponent } from '../../artists/artists.component';
import { ArtistDetailComponent } from '../../artists/artist-detail/artist-detail.component';
import { ContactComponent } from '../../contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

// Reesolvers
import { AuthResolver } from '../components/auth/auth.resolver';
import { ArtistDetailResolver } from '../../artists/artist-detail/artist-detail.resolver';

// Models
import { RouterPath } from '../models/router-paths';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RouterPath.home },
  { path: 'auth', component: AuthComponent, resolve: [AuthResolver] },
  { path: RouterPath.home, component: HomeComponent },
  { path: RouterPath.services, component: SalonServicesComponent },
  { path: RouterPath.artists, children: [
      { path: '', component: ArtistsComponent, pathMatch: 'full' },
      { path: `${RouterPath.artistDetail}/:artist`, component: ArtistDetailComponent, resolve: [ArtistDetailResolver] }
    ]
  },
  { path: RouterPath.contact, component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
