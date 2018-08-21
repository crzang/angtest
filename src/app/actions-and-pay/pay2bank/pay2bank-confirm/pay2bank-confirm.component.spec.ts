import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2bankConfirmComponent } from './pay2bank-confirm.component';

describe('Pay2bankConfirmComponent', () => {
  let component: Pay2bankConfirmComponent;
  let fixture: ComponentFixture<Pay2bankConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay2bankConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay2bankConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
