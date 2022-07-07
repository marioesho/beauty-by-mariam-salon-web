import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  providers: [AuthResolver, AuthService]
})
export class AuthModule { }
