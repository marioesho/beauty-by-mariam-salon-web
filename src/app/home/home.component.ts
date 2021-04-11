import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public window: Window = window;
  public desktopImageUrl = 'assets/images/home-desktop.jpg';
  public mobileImageUrl = 'assets/images/home-mobile.jpg';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
