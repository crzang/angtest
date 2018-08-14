import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsAndPayComponent } from './actions-and-pay.component';

describe('ActionsAndPayComponent', () => {
  let component: ActionsAndPayComponent;
  let fixture: ComponentFixture<ActionsAndPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsAndPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsAndPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
