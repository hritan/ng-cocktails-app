import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterText: string): any[] {
    if (!items) return [];
    if (!filterText) return items;
    
    return items.filter(item => {
      return ['strCategory', 'strDrink', 'ingredients'].some(key => {
        return (item[key]).toLowerCase().includes(filterText.toLowerCase());
      });
    });
   }
}
