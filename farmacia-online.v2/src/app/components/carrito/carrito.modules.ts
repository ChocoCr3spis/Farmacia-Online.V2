import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CarritoRoutes } from './carrito.routes'
import {CarritoComponent} from './carrito.component';

@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CarritoRoutes
  ],
  exports: [

  ]
})

export class CarritoModule {

}
