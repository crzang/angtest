import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFirstBannerItemComponent } from './dashboard-first-banner-item.component';

describe('DashboardFirstBannerItemComponent', () => {
  let component: DashboardFirstBannerItemComponent;
  let fixture: ComponentFixture<DashboardFirstBannerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFirstBannerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFirstBannerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
