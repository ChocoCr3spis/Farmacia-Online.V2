import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '@shared/shared.module';
import { LoginRoutes } from './login.routes';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutes
  ],
  exports: [

  ]
})

export class LoginModule { }
