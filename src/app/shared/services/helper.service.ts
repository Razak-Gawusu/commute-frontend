import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  toKebabCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}
