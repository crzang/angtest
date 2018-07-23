import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegChoiceComponent } from './reg-choice.component';

describe('RegChoiceComponent', () => {
  let component: RegChoiceComponent;
  let fixture: ComponentFixture<RegChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
