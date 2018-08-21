import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2bankComponent } from './pay2bank.component';

describe('Pay2bankComponent', () => {
  let component: Pay2bankComponent;
  let fixture: ComponentFixture<Pay2bankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay2bankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay2bankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
