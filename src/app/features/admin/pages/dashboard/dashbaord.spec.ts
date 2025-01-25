import { TestBed } from '@angular/core/testing';
import { AdminDashboardPage } from './dashboard.component';

describe('Admin Dashboard Page', () => {
  let service: AdminDashboardPage;
  beforeEach(() => (service = TestBed.inject(AdminDashboardPage)));

  it('should display Admin Dashboard Page', () => {
    console.log('admin');
  });
});
