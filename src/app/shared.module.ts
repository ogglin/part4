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
  declarations: [CheckboxGroupComponent, RadioGroupComponent, RangeGroupComponent],
  imports: [
    material,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    material,
    CheckboxGroupComponent,
    CommonModule,
    RadioGroupComponent,
    RangeGroupComponent
  ]
})
export class SharedModule {
}
