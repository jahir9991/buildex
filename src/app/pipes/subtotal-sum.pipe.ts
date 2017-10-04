import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'subtotalSum'
})
export class SubtotalSumPipe implements PipeTransform {

  transform(items: Array<number>, args?: any): any {

    return items.reduce((a, b) => a + (b['price'] * b['quantity']), 0);
  }

}
