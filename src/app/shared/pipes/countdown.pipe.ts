import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDownPipe',
  standalone: true,
})
export class CountDownPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const minutes: number = Math.floor(value / 60);
    const countDownStr =
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2);
    return countDownStr;
  }
}
