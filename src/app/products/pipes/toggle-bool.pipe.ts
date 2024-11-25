import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleBool'
})
export class ToggleBoolPipe implements PipeTransform {

  transform(value: boolean = false): string {
    return ( value ) ? 'SI' : 'NO';
  }

}
