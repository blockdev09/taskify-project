import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyForm } from './add-company-form';

describe('AddCompanyForm', () => {
  let component: AddCompanyForm;
  let fixture: ComponentFixture<AddCompanyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCompanyForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCompanyForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
