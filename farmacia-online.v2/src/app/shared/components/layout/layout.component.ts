import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from '../../../core/models/user/user';
import { UserService } from '../../../core/services/integration/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: false
})
export class LayoutComponent {
  menuItems: MenuItem[] = [];
  user: User | undefined;
  items: any;

  constructor(
    private userService: UserService
  ){}

  async ngOnInit() {
    this.user = await this.userService.getUserProfile();

    this.menuItems = [
      { label: 'Welcome', routerLink: '/home' },
      { label: 'Productos', routerLink: '/productos' }
    ];


    this.items = [
      {
          label: 'Profile',
          items: [
              {
                  label: 'User Profile',
                  icon: 'pi pi-cog',
                  route: '/user-profile'
              },
              {
                  label: 'Favourites',
                  icon: 'pi pi-inbox',
                  route: '/favourites'
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  route: '/logout'
              }
          ]
      },
      {
          separator: true
      }
  ];
  }
}
