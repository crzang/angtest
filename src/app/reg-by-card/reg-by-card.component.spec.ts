import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegByCardComponent } from './reg-by-card.component';

describe('RegByCardComponent', () => {
  let component: RegByCardComponent;
  let fixture: ComponentFixture<RegByCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegByCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
