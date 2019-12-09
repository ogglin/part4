import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RequestsService} from '../../service/requests.service';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from '../form/dynamic-form.service';
import {} from '../form/checkbox-group/checkbox-group.component';

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

@Component({
  selector: 'app-main-filter',
  templateUrl: './main-filter.component.html',
  styleUrls: ['./main-filter.component.scss']
})
export class MainFilterComponent implements OnInit {

  filters: Filter;
  captions: Array<string> = [];
  filterForm = new FormGroup({});
  fBody: Array<any> = [];
  results: any;
  brands: Array<any> = [];
  curBrands: Array<number> = [];
  @Input() brand: number;
  @Output() filterChange = new EventEmitter<any>();

  get isValid() {
    return true;
  }

  constructor(private req: RequestsService, private dfs: DynamicFormService) {
    /*this.req.getFilter(1).subscribe(res => {console.log(res); this.filter = res; });
    /*this.filter = this.freq.getFilter();*/
  }

  ngOnInit() {
    this.req.getFilter(1).subscribe(res => {
      this.filters = res.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      this.filterForm = this.dfs.toFormGroup(res);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.filters.length; i++) {
        if (i === 0 || this.captions.indexOf(this.filters[i].caption) === -1) {
          this.captions.push(this.filters[i].caption);
        }
      }
      console.log(this.filters);
    });
    this.curBrands.push(this.brand);
    this.req.getBrands().subscribe(
      result => {
        let checked: boolean;
        result.forEach(item => {
          this.curBrands.forEach(c => {
            checked = c === item.id;
          });
          this.brands.push({
            id: item.id,
            name: item.name,
            check: checked
          });
        });
      }
    );
  }

  onSubmit() {
    console.log('init');
    let val = '';
    let i = 1;
    this.fBody.forEach(item => {
      if (i < this.fBody.length) {
        val = val + item['ids'] + ',';
      } else {
        val = val + item['ids'];
      }
      i = i + 1;
    });
    this.req.applyFilter(val, this.curBrands).subscribe(result => {
      this.results = result;
      this.filterChange.emit(result);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    });
  }

  onChangeVals(value) {
    const pos = this.fBody.map(e => e.sub_id).indexOf(value.sub_id);
    if (pos !== -1) {
      this.fBody[pos] = value;
    } else {
      this.fBody.push(value);
    }
    console.log(this.fBody);
  }

  selectBrand(val) {
    if (this.curBrands.indexOf(val.id) < 0) {
      this.curBrands.push(val.id);
    } else {
      this.curBrands.splice(this.curBrands.indexOf(val.id), 1);
    }
  }
}
