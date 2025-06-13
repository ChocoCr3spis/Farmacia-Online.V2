import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG Modules
import { PrimeNgModule } from '../core/modules/primeng.module';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { LayoutComponent } from './components/layout/layout.component';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { PopoverModule } from 'primeng/popover';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { SelectButton } from 'primeng/selectbutton';
import { MenuModule } from 'primeng/menu';
import {Badge} from 'primeng/badge';

@NgModule({
    declarations: [
      LayoutComponent
    ],
  imports: [
    MenuModule,
    FormsModule,
    SelectButton,
    DataView,
    Tag,
    InputGroupModule,
    InputGroupAddonModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    ToastModule,
    PrimeNgModule,
    AvatarModule,
    MenubarModule,
    RouterModule,
    PopoverModule,
    Badge
  ],
    exports: [
      MenuModule,
      FormsModule,
      SelectButton,
      DataView,
      Tag,
      InputGroupModule,
      InputGroupAddonModule,
      ButtonModule,
      CommonModule,
      ReactiveFormsModule,
      InputTextModule,
      PasswordModule,
      ButtonModule,
      CardModule,
      ToastModule,
      AvatarModule,
      MenubarModule,
      PopoverModule
    ],
    providers: []
  })

  export class SharedModule { }
