import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [{path: '', component: UserProfileComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserProfileRoutes {

}
