import { Component, OnInit } from '@angular/core';
import { Artist, Artists } from './artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: Artist[] = Artists;

  constructor() { }

  ngOnInit(): void {
  }

}
