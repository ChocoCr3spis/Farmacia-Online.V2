import { NgModule, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductsRoutes } from './products.routes';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutes
  ],
  exports: [

  ]
})

export class ProductsModule {

}
