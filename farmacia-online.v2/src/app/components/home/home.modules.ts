import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutes } from './home.routes';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutes
  ],
  exports: [

  ]
})

export class HomeModule { }
