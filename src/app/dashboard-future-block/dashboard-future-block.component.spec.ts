import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFutureBlockComponent } from './dashboard-future-block.component';

describe('DashboardFutureBlockComponent', () => {
  let component: DashboardFutureBlockComponent;
  let fixture: ComponentFixture<DashboardFutureBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFutureBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFutureBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
