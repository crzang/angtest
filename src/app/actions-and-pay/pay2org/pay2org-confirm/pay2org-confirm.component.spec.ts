import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2orgConfirmComponent } from './pay2org-confirm.component';

describe('Pay2orgConfirmComponent', () => {
  let component: Pay2orgConfirmComponent;
  let fixture: ComponentFixture<Pay2orgConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay2orgConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay2orgConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
