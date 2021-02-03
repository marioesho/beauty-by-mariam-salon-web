import { NgModule } from '@angular/core';

import { ArtistDetailGuard } from './artist-detail.guard';

@NgModule({
  providers: [
    ArtistDetailGuard
  ]
})
export class GuardsModule { }
