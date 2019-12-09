import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule, MatRadioModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckboxGroupComponent } from './components/form/checkbox-group/checkbox-group.component';
import { RadioGroupComponent } from './components/form/radio-group/radio-group.component';
import { RangeGroupComponent } from './components/form/range-group/range-group.component';
import { CheckboxComponent } from './components/form/checkbox/checkbox.component';
import {NgScrollbarModule} from 'ngx-scrollbar';
import { MinMaxGroupComponent } from './components/form/min-max-group/min-max-group.component';

const material = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatRadioModule
];

@NgModule({
  declarations: [CheckboxGroupComponent, RadioGroupComponent, RangeGroupComponent, CheckboxComponent, MinMaxGroupComponent],
  imports: [
    material,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgScrollbarModule
  ],
  exports: [
    material,
    CheckboxGroupComponent,
    CommonModule,
    RadioGroupComponent,
    RangeGroupComponent,
    CheckboxComponent,
    NgScrollbarModule,
    MinMaxGroupComponent
  ]
})
export class SharedModule {
}
