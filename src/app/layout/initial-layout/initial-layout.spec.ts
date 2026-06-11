import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialLayout } from './initial-layout';

describe('InitialLayout', () => {
  let component: InitialLayout;
  let fixture: ComponentFixture<InitialLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(InitialLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
