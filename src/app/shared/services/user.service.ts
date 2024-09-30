import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../interfaces';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    const localUser = localStorage.getItem('commute-user');
    if (localUser) {
      this.userSource.next(JSON.parse(localUser));
    }
  }
  private userSource = new BehaviorSubject<IUser>({
    first_name: null,
    last_name: null,
    email: null,
    role: '',
    token: null,
  });

  currentUser = this.userSource.asObservable();

  authenticate(token: string) {
    try {
      const decoded: IUser = jwtDecode(token);
      localStorage.setItem(
        'commute-user',
        JSON.stringify({ ...decoded, token })
      );
      this.userSource.next({ ...decoded, token });
    } catch (error) {
      console.error(error);
    }
  }

  get fullName() {
    const { first_name, last_name } = this.userSource.getValue();
    return `Gawusu Razak`;
  }

  get email() {
    const { email } = this.userSource.getValue();
    return email;
  }

  get token(): any {
    const { token } = this.userSource.getValue();
    return token;
  }
  set token(token: string) {
    const currentUser = this.userSource.getValue();
    this.userSource.next({ ...currentUser, token });
  }

  get role() {
    const { role } = this.userSource.getValue();
    return role;
  }
}
