import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public get hasInstagramToken(): boolean {
    return !!this.getInstagramToken();
  }

  public getInstagramToken(): string {
    return localStorage.getItem('instagramToken') as string;
  }

  public storeInstagramToken(token: string): void {
    this.storeToken('instagramToken', token);
  }

  private storeToken(name: string, token: string): void {
    localStorage.setItem(name, token);
  }
}
