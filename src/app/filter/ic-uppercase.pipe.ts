import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icUppercase'
})
export class IcUppercasePipe implements PipeTransform {

  transform(value, ...args) {
    return value.toUpperCase();
  }

}
