import { Injectable } from '@angular/core';
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot
} from '@angular/router';
import { RouterPath } from 'src/app/core/models/router-paths';

import { Artist, Artists } from '../artists';

@Injectable()
export class ArtistDetailResolver implements Resolve<Artist | void> {
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Artist | void {
    if (route.params.artist) {
      const artist = Artists.get(route.params.artist);
      if (artist) {
        return artist;
      }
    }

    this.router.navigateByUrl(RouterPath.artists);
  }
}
