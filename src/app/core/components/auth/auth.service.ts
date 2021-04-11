import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InstagramUser } from '../../models/instagram-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static isInstagramAuthorized = false;

  constructor(private httpClient: HttpClient) { }

  public getInstagramUser(authCode: string): Observable<any> {
    const url = 'https://api.instagram.com/oauth/access_token';
    const formData = new FormData();
    formData.set('client_id', '495775344799163');
    formData.set('client_secret', '');
    formData.set('grant_type', 'authorization_code');
    formData.set('redirect_uri', 'https://localhost:4200/auth/');
    formData.set('code', authCode);
    return this.httpClient.post(url, formData);
  }

  public storeInstagramUser(user: InstagramUser): void {
    this.storeUser('instagramUser', JSON.stringify(user));
  }

  private storeUser(name: string, token: string): void {
    localStorage.setItem(name, token);
  }
}
