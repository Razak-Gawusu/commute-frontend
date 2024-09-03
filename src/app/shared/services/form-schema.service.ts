import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Role, SingleFormSchema } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormSchemaService {
  constructor(private fb: FormBuilder) {}
  loginSchema: SingleFormSchema[] = [
    {
      name: 'email',
      initialValue: '',
      validators: [Validators.required, Validators.email],
    },
    {
      name: 'password',
      initialValue: '',
      validators: [Validators.required],
    },
  ];

  registerSchema: SingleFormSchema[] = [
    {
      name: 'first_name',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(2)],
    },
    {
      name: 'last_name',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(2)],
    },
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
    {
      name: 'role',
      initialValue: '',
      validators: [Validators.required, this.enumValidator(Role)],
    },
  ];

  forgotPasswordSchema: SingleFormSchema[] = [
    {
      name: 'email',
      initialValue: '',
      validators: [Validators.required, Validators.email],
    },
  ];

  resetPasswordSchema: SingleFormSchema[] = [
    {
      name: 'password',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(12)],
    },
    {
      name: 'confirm_password',
      initialValue: '',
      validators: [Validators.required],
    },
  ];

  createPasswordSchema: SingleFormSchema[] = [
    {
      name: 'new_password',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(12)],
    },
    {
      name: 'confirm_password',
      initialValue: '',
      validators: [Validators.required, Validators.minLength(12)],
    },
  ];

  verifyOTPSchema: SingleFormSchema[] = [
    {
      name: 'reset_code',
      initialValue: '',
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ],
    },
  ];

  enumValidator(enumType: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const enumValues = Object.values(enumType);

      if (value && !enumValues.includes(value)) {
        return { invalidEnum: true };
      }

      return null;
    };
  }

  // generate form {name: string, initialValue: string, isRequired: boolean, errorMessage: string}[]
  generateForm(arr: SingleFormSchema[]) {
    const obj = Object.create({});
    for (let item of arr) {
      obj[item.name] = this.fb.control(item.initialValue || '', [
        ...item.validators,
      ]);
    }
    return this.fb.group({ ...obj }, { updateOn: 'blur' });
  }
}
