import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFilter} from '../dynamic-filter';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {
  @Input() options = Array<DynamicFilter>();
  @Input() subId: number;
  @Output() toggle = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.options);
  }

  onToggle(e) {
    const sVals = {
      type: 'radio',
      sub_id: this.subId,
      ids: e.value
    };
    this.toggle.emit(sVals);
  }
}
