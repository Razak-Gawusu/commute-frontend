import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

type foB = {
  name: string;
  initialValue: string;
  validators: any[];
};

@Injectable({
  providedIn: 'root',
})
export class FormSchema {
  loginSchema: foB[] = [
    {
      name: 'email',
      initialValue: '',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(12)],
    },
  ];

  //   registerSchema: foB[] = [
  //     {
  //       name: 'first_name',
  //       initialValue: '',
  //       isRequired: true,
  //       errorMessage: '',
  //     },
  //     { name: 'last_name', initialValue: '', isRequired: true, errorMessage: '' },
  //     { name: 'email', initialValue: '', isRequired: true, errorMessage: '' },
  //     { name: 'password', initialValue: '', isRequired: true, errorMessage: '' },
  //     { name: 'role', initialValue: '', isRequired: false, errorMessage: '' },
  //   ];

  //   loginForm = this.fb.group({
  //     email: this.fb.control('', Validators.required),
  //     password: this.fb.control('', Validators.required),
  //   });

  //   forgotPasswordForm = this.fb.group({
  //     email: this.fb.control('', Validators.required),
  //   });

  //   resetPasswordForm = this.fb.group({
  //     password: this.fb.control('', Validators.required),
  //     confirm_password: this.fb.control('', Validators.required),
  //   });

  //   createPasswordForm = this.fb.group({
  //     new_password: this.fb.control('', Validators.required),
  //     confirm_password: this.fb.control('', Validators.required),
  //   });

  //   verifyOTPForm = this.fb.group({
  //     otp: this.fb.control('', Validators.required),
  //   });
}
