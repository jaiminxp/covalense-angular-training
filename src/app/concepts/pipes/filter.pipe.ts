import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchString: string) {
    if (!searchString) {
      return value;
    }

    let filteredValue = value.filter((movie) => movie.name === searchString);

    return filteredValue;
  }
}
