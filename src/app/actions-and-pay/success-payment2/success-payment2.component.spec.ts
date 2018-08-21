import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPayment2Component } from './success-payment2.component';

describe('SuccessPayment2Component', () => {
  let component: SuccessPayment2Component;
  let fixture: ComponentFixture<SuccessPayment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPayment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPayment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
