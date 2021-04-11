import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { InstagramUser } from '../../models/instagram-user';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<void> {
  constructor(private authService: AuthService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    const instagramAuthCode = route.queryParamMap.get('code');
    if (instagramAuthCode) {
      this.authService.getInstagramUser(instagramAuthCode).subscribe(x => this.authService.storeInstagramUser(new InstagramUser(x)));
    }
  }
}
