import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'analyticTotalPipe',
  standalone: true,
})
export class AnalyticTotalPipe implements PipeTransform {
  transform(value: string) {
    return `Total ${value}`;
  }
}
