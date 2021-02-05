import { Component, OnInit } from '@angular/core';

import { RouterPath } from '../../models/router-paths';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routerPath = RouterPath;

  constructor() { }

  ngOnInit(): void {
  }

}
