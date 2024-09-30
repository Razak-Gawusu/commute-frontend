import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../../interfaces';
import { UserService } from '../../../../shared';
import { ButtonComponent } from '../../../../shared/components/Button/button.component';

@Component({
  selector: 'cm-driver-profile',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div>
      <h1>hey, {{ user.email }} profile</h1>
    </div>
  `,
})
export class DriverProfilePage implements OnInit {
  user!: IUser;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((item) => (this.user = item));
  }
}
