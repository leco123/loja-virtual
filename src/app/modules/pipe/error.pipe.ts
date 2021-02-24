import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'erro'
})
export class ErrorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      if (value['required']) {
        return 'Canpo obrigatório.';
      } else if (value['email']) {
        return 'E-mail inválido.';
      } else {
        const chaves = Object.keys(value);
        if (chaves.length > 0) {
          return value[chaves[0]];
        }
      }
    }
    return null;
  }

}
