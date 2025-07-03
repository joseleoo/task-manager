import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDueDate'
})
export class FormatDueDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
