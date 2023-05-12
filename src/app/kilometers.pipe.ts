import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class KilometersPipe implements PipeTransform {
  // So whenever this pipe is called this transform function
  // runs and whatever it outputs is going to be the formatted
  // data thats going to be displayed to the user.
  // All Additional arguments are stored inside of the args array.
  transform(value: number, unit: string): unknown {
    // Converting the input value which is expected to be a number
    // in miles into kilometers.
    if (!value) return null;

    switch (unit) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1000;
      case 'cm':
        return value * 1000 * 1000;
      default:
        throw new Error('Conversion Unit not supported');
    }
  }
}
