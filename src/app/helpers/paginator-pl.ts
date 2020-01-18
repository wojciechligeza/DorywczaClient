import {MatPaginatorIntl} from '@angular/material';
export class PaginatorPL extends MatPaginatorIntl {

  itemsPerPageLabel: string = 'Ilość wyświetlanych ofert';
  nextPageLabel: string     = 'Następna strona';
  previousPageLabel: string = 'Poprzednia strona';

  getRangeLabel = (page, pageSize, length): string => {
    if (length === 0 || pageSize === 0) {
      return '0 z ' + length;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIndex + ' z ' + length;
  }
}
