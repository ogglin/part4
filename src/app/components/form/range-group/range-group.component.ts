import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFilter} from '../dynamic-filter';

@Component({
  selector: 'app-range-group',
  templateUrl: './range-group.component.html',
  styleUrls: ['./range-group.component.scss']
})
export class RangeGroupComponent implements OnInit {
  @Input() options = Array<DynamicFilter>();
  @Input() subId: number;
  @Output() toggle = new EventEmitter<any>();
  rValue: 0;
  constructor() { }

  ngOnInit() {
  }

  onToggle(e) {
    this.rValue = e.target.value;
    const sVals = {
      type: 'range',
      sub_id: this.subId,
      ids: +e.target.value
    };
    this.toggle.emit(sVals);
  }
}
