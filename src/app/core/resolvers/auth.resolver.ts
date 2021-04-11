import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthResolver implements Resolve<void> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    const instagramAuthCode = route.queryParamMap.get('code');
    console.log();
  }
}
