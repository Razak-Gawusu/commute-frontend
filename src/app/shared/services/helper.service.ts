import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  toKebabCase(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  getAnalyticIcon(name: string) {
    switch (name) {
      case 'schools':
        return 'graduationCap';
      case 'parents':
        return 'usersRound';
      case 'drivers':
        return 'car';
      case 'trips':
        return 'carTaxiFront';
      default:
        return 'car';
    }
  }
}
