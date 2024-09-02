import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IUser } from '../../../../interfaces';
import { UserService } from '../../../../shared';
import { ButtonComponent } from '../../../../shared/components/Button/button.component';
import { AuthService } from '../../../../core';

@Component({
  selector: 'cm-dashboard-driver',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div>
      Drivers Dashboard
      <h1>hey, {{ user.email }}</h1>
      <p>working</p>

      <cm-button (click)="authService.logout()">Logout</cm-button>
    </div>
  `,
})
export class DashboardPage implements OnInit {
  user!: IUser;
  authService: AuthService = inject(AuthService);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((item) => (this.user = item));
  }
}
