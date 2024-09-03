import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CreatePasswordFormComponent } from '../../components/create-password-form';
import { UserTagComponent } from '../../../../shared/components/UserTag/user-tag.component';
import { AuthService } from '../../services';
import { FormGroup } from '@angular/forms';
import { FormSchemaService, UserService } from '../../../../shared';

@Component({
  selector: 'cm-create-password',
  standalone: true,
  template: `<div class="w-full max-w-md mx-auto grid gap-6">
    <div>
      <h1 class="text-3xl font-fjalla">Create Password</h1>
      <p class="text-sm text-gray-600">
        Enter your new password and confirm your new password
      </p>
    </div>

    <cm-user-tag />

    <cm-create-password-form
      [formGroup]="createPasswordForm"
      (createPasswordEvent)="onCreatePassword()"
      [isLoading]="authService.createPasswordMutation.isPending()"
    />
  </div>`,
  imports: [CreatePasswordFormComponent, RouterLink, UserTagComponent],
})
export class CreatePasswordPage {
  authService: AuthService = inject(AuthService);
  createPasswordForm: FormGroup<any>;

  constructor(
    route: ActivatedRoute,
    userService: UserService,
    formSchema: FormSchemaService
  ) {
    this.createPasswordForm = formSchema.generateForm([
      ...formSchema.createPasswordSchema,
    ]);

    // setToken in localStorage
    route.queryParams.subscribe((params) => {
      userService.authenticate(params['token']);
    });
  }

  onCreatePassword() {
    const { new_password } = this.createPasswordForm.value;
    this.authService.createPasswordMutation.mutate({ new_password });
  }
}
