import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DynamicFilter} from '../dynamic-filter';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() value: string;
  @Input() id: number;
  @Input() checked: boolean;
  @Output() toggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    const val = {
      id: this.id, check: this.checked
    };
    this.toggle.emit(val);
  }
}
