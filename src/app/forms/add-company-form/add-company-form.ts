import { Component, signal } from '@angular/core';
import { form, required, email } from '@angular/forms/signals';
// import { DynamicFormComponent } from '../../shared/dynamic-form/dynamic-form';
import {DynamicFormComponent} from '../../shared/form/form';
@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [DynamicFormComponent],
  templateUrl: './add-company-form.html',
})
export class AddCompanyComponent {

  companyModel = signal({
    name: '',
    subscription: '',
    adminName: '',
    adminEmail: '',
  });

  companyForm = form(this.companyModel, path => {

    required(path.name, {
      message: 'Company name required'
    });

    required(path.subscription, {
      message: 'Subscription required'
    });

    required(path.adminName, {
      message: 'Admin name required'
    });

    required(path.adminEmail, {
      message: 'Admin email required'
    });

    email(path.adminEmail, {
      message: 'Invalid email'
    });

  });

  companyFields = [
    {
      key: 'name',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Enter company name'
    },
    {
      key: 'subscription',
      label: 'Subscription',
      type: 'select',
      options: [
        {
          label: 'Basic',
          value: 'Basic'
        },
        {
          label: 'Premium',
          value: 'Premium'
        },
        {
          label: 'Enterprise',
          value: 'Enterprise'
        }
      ]
    },
    {
      key: 'adminName',
      label: 'Admin Name',
      type: 'text'
    },
    {
      key: 'adminEmail',
      label: 'Admin Email',
      type: 'email'
    }
  ] as const;

  onSubmit() {

    console.log(this.companyModel());

    // API Call

  }
}