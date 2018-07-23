import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegByContractComponent } from './reg-by-contract.component';

describe('RegByContractComponent', () => {
  let component: RegByContractComponent;
  let fixture: ComponentFixture<RegByContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegByContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegByContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
