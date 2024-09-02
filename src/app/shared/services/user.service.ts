import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    role: null,
    token: null,
  });

  currentUser = this.userSource.asObservable();

  authenticate(token: string) {
    const decoded: IUser = jwtDecode(token);
    localStorage.setItem('commute-user', JSON.stringify({ ...decoded, token }));
    this.userSource.next({ ...decoded, token });
  }

  getToken() {
    const { token } = this.userSource.getValue();
    return token;
  }

  getRole() {
    const { role } = this.userSource.getValue();
    return role;
  }

  setToken(token: string) {
    const currentUser = this.userSource.getValue();
    this.userSource.next({ ...currentUser, token });
  }
}
