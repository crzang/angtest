import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegByAccountComponent } from './reg-by-account.component';

describe('RegByAccountComponent', () => {
  let component: RegByAccountComponent;
  let fixture: ComponentFixture<RegByAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegByAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
