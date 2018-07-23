import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivMiddleComponent } from './div-middle.component';

describe('DivMiddleComponent', () => {
  let component: DivMiddleComponent;
  let fixture: ComponentFixture<DivMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
