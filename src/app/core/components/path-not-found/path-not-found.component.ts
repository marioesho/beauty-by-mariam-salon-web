import { Component, OnInit } from '@angular/core';

import { RouterPath } from '../../models/router-paths';

@Component({
  selector: 'app-path-not-found',
  templateUrl: './path-not-found.component.html',
  styleUrls: ['./path-not-found.component.scss']
})
export class PathNotFoundComponent implements OnInit {
  public routerPath = RouterPath;

  constructor() { }

  ngOnInit(): void {
  }

}
