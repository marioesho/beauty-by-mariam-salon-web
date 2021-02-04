import { NgModule } from '@angular/core';

import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistsComponent } from './artists.component';

import { ArtistDetailResolver } from 'src/app/artists/artist-detail/artist-detail.resolver';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistDetailComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [
    ArtistDetailResolver
  ]
})
export class ArtistsModule { }
