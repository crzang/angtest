import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pay2orgComponent } from './pay2org.component';

describe('Pay2orgComponent', () => {
  let component: Pay2orgComponent;
  let fixture: ComponentFixture<Pay2orgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pay2orgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pay2orgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
