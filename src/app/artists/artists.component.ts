import { Component, OnInit } from '@angular/core';

import { Artist, Artists } from './artists';
import { RouterPath } from '../core/models/router-paths';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: Map<string, Artist> = Artists;
  public routerPath = RouterPath;

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  asIsOrder(): number {
    return 1;
  }
}
