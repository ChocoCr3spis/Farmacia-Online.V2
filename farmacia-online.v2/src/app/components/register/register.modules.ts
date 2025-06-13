import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SharedModule } from '@shared/shared.module';
import { RegisterRoutes } from './register.routes';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RegisterRoutes
  ],
  exports: [

  ]
})

export class RegisterModule { }
