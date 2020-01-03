import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterProduct'
  })
  export class FilterPipeProduct implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
      if(!items) return [];
      if(!searchText) return items;
  searchText = searchText.toLowerCase();
  return items.filter( it => {
  
        return it.name.toLowerCase().includes(searchText);
      });
     }
  }