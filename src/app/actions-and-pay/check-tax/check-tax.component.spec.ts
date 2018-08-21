import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTaxComponent } from './check-tax.component';

describe('CheckTaxComponent', () => {
  let component: CheckTaxComponent;
  let fixture: ComponentFixture<CheckTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
