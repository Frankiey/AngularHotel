import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFromNumber'})
export class DateFromNumber implements PipeTransform {
  transform(value: number[]): string {
    return value.reverse().join('-');
  }
}
