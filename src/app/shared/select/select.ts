import { Component, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [FormField],
  templateUrl: './select.html',
})
export class SelectInputComponent {
  label = input.required<string>();
  field = input.required<any>();

  options = input.required<
    {
      label: string;
      value: string;
    }[]
  >();
}