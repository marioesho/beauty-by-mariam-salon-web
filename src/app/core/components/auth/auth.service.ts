import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public getInstagramAccess(authCode: string): Observable<any> {
    const url = 'https://api.instagram.com/oauth/access_token';
    const formData = new FormData();
    formData.set('client_id', '495775344799163');
    formData.set('client_secret', 'e065166ae62bda4b040aca017372c16d');
    formData.set('grant_type', 'authorization_code');
    formData.set('redirect_uri', 'https://localhost:4200/auth/');
    formData.set('code', authCode);
    return this.httpClient.post(url, formData);
  }
}
