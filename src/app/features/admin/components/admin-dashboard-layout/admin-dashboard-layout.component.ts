import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core';
import {
  ConstantService,
  SidebarService,
  UserService,
} from '../../../../shared';
import { TagComponent } from '../../../../shared/components/Tag/tag.component';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../../../../shared/components/Button/button.component';
import { AvatarComponent } from '../../../../shared/components/Avatar/avatar.component';
import { MenuComponent } from '../../../../shared/components/Menu/menu.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cm-admin-dashboard-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    TagComponent,
    LucideAngularModule,
    ButtonComponent,
    AvatarComponent,
    MenuComponent,
  ],
  styles: [
    `
      .active-link {
        background-color: #b45309;
        border-radius: 20px;
      }
    `,
  ],
  template: `
    <div [ngClass]="['w-full h-screen grid grid-cols-[270px_1fr]']">
      <div class="group/sidebar bg-amber-900 flex flex-col justify-between">
        <div class="flex flex-col h-full justify-start">
          <div
            class="relative h-20 flex px-5 items-center justify-between border-b border-amber-800"
          >
            <span class="text-white text-lg font-fjalla">Commute</span>

            <cm-tag [role]="userService.role" />

            <button
              class="hidden bg-white absolute right-[-16px] rounded-full h-8 w-8 group-hover/sidebar:flex  justify-center items-center"
            >
              <lucide-icon name="chevronsLeft" />
            </button>
          </div>

          <nav class="py-6 px-4 flex flex-col gap-4 h-full">
            <a
              *ngFor="let item of sidebarService.sidebarNavItems"
              [routerLink]="item.path"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLinkActive="active-link"
              [ngClass]="{
                'flex gap-4 items-center px-4 py-2 hover:rounded-full hover:bg-amber-700 text-white': true,
                'last:mt-auto': userService.role !== 'super_admin',
                '[&:nth-last-child(2)]:mt-auto': userService.role === 'super_admin',
              }"
            >
              <lucide-icon [name]="item.iconName" size="20" />
              {{ item.label }}
            </a>
          </nav>
        </div>
      </div>

      <div class="">
        <header class="h-20 flex justify-between items-center px-5 border-b">
          <h1 class="text-xl font-semibold capitalize font-fjalla">
            {{ dashboardTitle }}
          </h1>

          <div class="flex items-center gap-4">
            <button
              class="w-10 h-10 border rounded-sm flex justify-center items-center hover:bg-gray-100"
            >
              <lucide-icon name="bell" size="18" color="#4b5563" />
            </button>
            <div class="flex justify-between items-center gap-3 border-l">
              <div class="flex items-center gap-1">
                <cm-avatar [name]="userService.fullName" />
                <div class="text-gray-600 text-xs">
                  <p>{{ userService.fullName }}</p>
                  <p>{{ userService.email }}</p>
                </div>
              </div>

              <cm-menu [items]="headerDropdownOption" />
            </div>
          </div>
        </header>
        <main class="p-6">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
})
export class AdminDasboardLayout {
  dashboardTitle: any = '';
  route: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  userService: UserService = inject(UserService);
  sidebarService: SidebarService = inject(SidebarService);

  headerDropdownOption: MenuItem[] = [
    {
      label: 'Profile',
      command: () =>
        this.route.navigate([`/user/${this.userService.role}/profile`]),
    },
    { label: 'Logout', command: () => this.authService.logout() },
  ];

  constructor() {
    this.route.events.subscribe((val: any) => {
      const url = val.url;
      if (typeof url === 'string') {
        this.dashboardTitle = url.split('/').pop();
      }
    });

    console.log(this.sidebarService.sidebarNavItemsDown);
  }
}
