import { Injectable } from '@angular/core';
import { NavItem } from '../../interfaces';
import { UserService } from './user.service';
import { ConstantService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private adminNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      path: this.constantService.routes.super_admin.dashboard,
      iconName: 'layoutDashboard',
    },
    {
      label: 'Schools',
      path: this.constantService.routes.super_admin.schools,
      iconName: 'school',
    },
    {
      label: 'Drivers',
      path: this.constantService.routes.super_admin.drivers,
      iconName: 'car',
    },
    {
      label: 'Trips',
      path: this.constantService.routes.super_admin.trips,
      iconName: 'carTaxiFront',
    },
    {
      label: 'Customer Support',
      path: this.constantService.routes.super_admin.customer_support,
      iconName: 'headset',
    },
    {
      label: 'Settings',
      path: this.constantService.routes.super_admin.settings,
      iconName: 'settings',
    },
  ];
  private schoolNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      path: this.constantService.routes.user.school.dashboard,
      iconName: 'layoutDashboard',
    },
    {
      label: 'Profile',
      path: '/user/school/dashboard/profile',
      iconName: 'school',
    },
    {
      label: 'Parents',
      path: '/user/school/dashboard/parent',
      iconName: 'users',
    },
    {
      label: 'Trips',
      path: '/user/school/dashboard/trips',
      iconName: 'carTaxiFront',
    },
    {
      label: 'Settings',
      path: this.constantService.routes.super_admin.settings,
      iconName: 'settings',
    },
  ];
  private parentNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      path: '/user/parent/dashboard',
      iconName: 'layoutDashboard',
    },
    {
      label: 'Profile',
      path: '/user/parent/dashboard/profile',
      iconName: 'userRound',
    },
    {
      label: 'Trips',
      path: '/user/parent/dashboard/trips',
      iconName: 'carTaxiFront',
    },
    {
      label: 'Settings',
      path: this.constantService.routes.super_admin.settings,
      iconName: 'settings',
    },
  ];
  private driverNavItems: NavItem[] = [
    {
      label: 'Dashboard',
      path: '/user/driver/dashboard',
      iconName: 'layoutDashboard',
    },
    {
      label: 'Profile',
      path: '/user/driver/dashboard/profile',
      iconName: 'car',
    },
    {
      label: 'Trips',
      path: '/user/driver/dashboard/trips',
      iconName: 'carTaxiFront',
    },
    {
      label: 'Settings',
      path: this.constantService.routes.super_admin.settings,
      iconName: 'settings',
    },
  ];

  constructor(
    private userService: UserService,
    private constantService: ConstantService
  ) {}

  get sidebarNavItems() {
    switch (this.userService.role) {
      case 'super_admin':
        return this.adminNavItems;
      case 'admin':
        return this.schoolNavItems;
      case 'parent':
        return this.parentNavItems;
      case 'driver':
        return this.driverNavItems;
      default:
        throw new Error(`Invalid user role: ${this.userService.role}`);
    }
  }

  get sidebarNavItemsDown(): NavItem[] {
    return [
      {
        label: 'Customer Support',
        path: '/user/driver/dashboard/profile',
        iconName: 'headset',
      },
      {
        label: 'Settings',
        path: '/user/driver/dashboard/trips',
        iconName: 'settings',
      },
    ];
  }
}
