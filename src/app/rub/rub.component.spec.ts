import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubComponent } from './rub.component';

describe('RubComponent', () => {
  let component: RubComponent;
  let fixture: ComponentFixture<RubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
