import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somePipe'
})
export class SomePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
