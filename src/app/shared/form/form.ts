import { Component, input, output } from '@angular/core';
import { FormField } from '@angular/forms/signals';
// import { FormFieldConfig } from './field-config';
import { FormFieldConfig } from '../../interfaces/addcompany';
@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [FormField],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class DynamicFormComponent {
  title = input.required<string>();

  fields = input.required<FormFieldConfig[]>();

  form = input.required<any>();

  submitted = output<void>();

  getField(key: string) {
    return this.form()[key];
  }

  submit(event: Event) {
    event.preventDefault();
    this.submitted.emit();
  }
}