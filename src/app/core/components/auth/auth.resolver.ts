import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';
import { RouterPath } from '../../models/router-paths';
import { TokenService } from '../../services/token.service';

@Injectable()
export class AuthResolver implements Resolve<void> {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<void> {
    const instagramAuthCode = route.queryParamMap.get('code');
    if (instagramAuthCode) {
      const instagramToken = (await this.authService.getInstagramAccess(instagramAuthCode).toPromise()).access_token;
      this.tokenService.storeInstagramToken(instagramToken);
    }

    this.router.navigateByUrl(RouterPath.home);
  }
}
