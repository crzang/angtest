import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFutureBlockItemComponent } from './dashboard-future-block-item.component';

describe('DashboardFutureBlockItemComponent', () => {
  let component: DashboardFutureBlockItemComponent;
  let fixture: ComponentFixture<DashboardFutureBlockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFutureBlockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFutureBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
