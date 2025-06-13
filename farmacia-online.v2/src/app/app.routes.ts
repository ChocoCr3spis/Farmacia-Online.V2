import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './components/products/products.modules';

const loginModule            = () => import('./components/login/login.modules').then(m => m.LoginModule);
const registerModule         = () => import('./components/register/register.modules').then(m => m.RegisterModule);
const homeModule             = () => import('./components/home/home.modules').then(m => m.HomeModule);
const productsModule         = () => import('./components/products/products.modules').then(m => m.ProductsModule);
const userProfileModule      = () => import('./components/user-profile/user-profile.modules').then(m => m.UserProfileModule);
const cartModule      = () => import('./components/carrito/carrito.modules').then(m => m.CarritoModule);


export const routes: Routes = [
//   { path: ''                  , canActivate: [authGuard], loadChildren: homeModule },
  { path: ''                  ,                           loadChildren: homeModule     },
  { path: 'login'             ,                           loadChildren: loginModule    },
  { path: 'register'          ,                           loadChildren: registerModule },
  { path: 'home'              ,                           loadChildren: homeModule     },
  { path: 'productos'         ,                           loadChildren: productsModule },
  { path: 'user-profile'      ,                           loadChildren: userProfileModule },
  { path: 'cart',                                         loadChildren: cartModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
