import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPayComponent } from './actions-pay.component';

describe('ActionsPayComponent', () => {
  let component: ActionsPayComponent;
  let fixture: ComponentFixture<ActionsPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
