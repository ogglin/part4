import {Injectable} from '@angular/core';

import {DynamicFilter} from '../form/dynamic-filter';
import {RequestsService} from '../../service/requests.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filter: Array<DynamicFilter>;

  constructor(private req: RequestsService) {
  }

  getFilter() {
    this.req.getFilter(1).subscribe(res => {
      return this.filter = res;
    });
  }
}
