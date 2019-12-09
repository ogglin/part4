import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFilter} from '../dynamic-filter';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-min-max-group',
  templateUrl: './min-max-group.component.html',
  styleUrls: ['./min-max-group.component.scss']
})
export class MinMaxGroupComponent implements OnInit {
  @Input() options = Array<DynamicFilter>();
  @Input() subId: number;
  @Output() toggle = new EventEmitter<any>();
  min: number;
  max: number;
  constructor() { }

  ngOnInit() {
    this.min = this.options[0].min;
    this.max = this.options[1].max;
  }

  onChange(e, init) {
    switch (init) {
      case 'min': this.min = +e.target.value; break;
      case 'max': this.max = +e.target.value; break;
    }
    const sVals = {
      type: 'range',
      sub_id: this.subId,
      min: this.min,
      max: this.max
    };
    this.toggle.emit(sVals);
  }

}
