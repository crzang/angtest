import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFooterBlockComponent } from './dashboard-footer-block.component';

describe('DashboardFooterBlockComponent', () => {
  let component: DashboardFooterBlockComponent;
  let fixture: ComponentFixture<DashboardFooterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFooterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFooterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
