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
    this.authorizeUser();
  }

  private authorizeUser(): void {
    if (!localStorage.getItem('instagramUser')) {
      window.location.href = 'https://api.instagram.com/oauth/authorize?client_id=495775344799163&redirect_uri=https://localhost:4200/auth/&scope=user_profile,user_media&response_type=code';
    }
  }
}
