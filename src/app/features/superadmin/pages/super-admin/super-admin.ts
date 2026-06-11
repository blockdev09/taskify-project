import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
// import { AddCompanyForm } from '../../../../forms/add-company-form/add-company-form';
import { AddCompanyComponent } from '../../../../forms/add-company-form/add-company-form';
@Component({
  selector: 'app-super-admin',
  imports: [],
  templateUrl: './super-admin.html',
  styleUrl: './super-admin.scss',
})
export class SuperAdmin {
  dialog = inject(Dialog);
  openAddCompanyModal() {
    this.dialog.open(AddCompanyComponent, {disableClose : true});
  }
}
