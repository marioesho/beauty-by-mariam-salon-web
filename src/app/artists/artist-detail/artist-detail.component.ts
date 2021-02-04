import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../artists';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  public artist!: Artist;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.artist = this.route.snapshot.data[0] as Artist;
  }

}
