import { NgModule } from '@angular/core';

import { ArtistDetailResolver } from 'src/app/artists/artist-detail/artist-detail.resolver';

@NgModule({
  providers: [
    ArtistDetailResolver
  ]
})
export class GuardsModule { }
