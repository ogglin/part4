import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFilter} from '../dynamic-filter';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent implements OnInit {
  @Input() options = Array<DynamicFilter>();
  @Input() subId: number;
  @Output() toggle = new EventEmitter<any>();
  selectedValues: any[];
  constructor() {
  }

  ngOnInit() {

  }
  onToggle() {
    const checkedOptions = this.options.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.id);
    const sVals = {
      type: 'checkbox',
      sub_id: this.subId,
      ids: checkedOptions.map(x => x.id)
    };
    this.toggle.emit(sVals);
  }


}
