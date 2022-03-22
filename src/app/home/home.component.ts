import { Component, OnInit } from '@angular/core';

import { TokenService } from '../core/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public window: Window = window;
  public desktopImageUrl = 'assets/images/home-desktop.jpg';
  public mobileImageUrl = 'assets/images/home-mobile.jpg';

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getAuthTokens();
  }

  private getAuthTokens(): void {
    if (!this.tokenService.hasInstagramToken) {
      window.location.href = 'https://api.instagram.com/oauth/authorize?client_id=667303191055661&redirect_uri=https://localhost:4200/auth&scope=user_profile,user_media&response_type=code';
    }
  }
}
