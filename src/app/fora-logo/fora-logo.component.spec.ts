import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForaLogoComponent } from './fora-logo.component';

describe('ForaLogoComponent', () => {
  let component: ForaLogoComponent;
  let fixture: ComponentFixture<ForaLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForaLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
