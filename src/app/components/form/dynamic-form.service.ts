import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

type Filter = Array<{
  caption: string;
  caption_en: string;
  id: number;
  sub_id: number;
  subcaption: string;
  subcaption_en: string;
  type: string;
  values: Array<any>;
}>;

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  toFormGroup(filters: Filter ) {
    const group: any = {};
    filters.forEach(filter => {
      group[filter.sub_id] = new FormControl('');
    });

    return new FormGroup(group);
  }
}
