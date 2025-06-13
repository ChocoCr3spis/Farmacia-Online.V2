import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared/shared.module';
import { LoginRoutes } from './login.routes';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutes,
    BadgeModule
  ],
  exports: [

  ]
})

export class LoginModule { }
