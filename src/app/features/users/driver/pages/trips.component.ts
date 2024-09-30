import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../interfaces';
import { UserService } from '../../../../shared';
import { ButtonComponent } from '../../../../shared/components/Button/button.component';

@Component({
  selector: 'cm-driver-trips',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div>
      <h1>hey, {{ user.email }} driver</h1>
    </div>
  `,
})
export class DriverTripsPage implements OnInit {
  user!: IUser;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((item) => (this.user = item));
  }
}
