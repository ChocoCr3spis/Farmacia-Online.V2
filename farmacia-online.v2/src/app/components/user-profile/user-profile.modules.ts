import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutes } from './user-profile.routes';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    SharedModule,
    UserProfileRoutes
  ],
  exports: [

  ]
})

export class UserProfileModule { }
