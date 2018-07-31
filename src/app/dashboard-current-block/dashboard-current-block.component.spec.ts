import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCurrentBlockComponent } from './dashboard-current-block.component';

describe('DashboardCurrentBlockComponent', () => {
  let component: DashboardCurrentBlockComponent;
  let fixture: ComponentFixture<DashboardCurrentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCurrentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCurrentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
