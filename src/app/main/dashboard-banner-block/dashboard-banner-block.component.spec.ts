import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBannerBlockComponent } from './dashboard-banner-block.component';

describe('DashboardBannerBlockComponent', () => {
  let component: DashboardBannerBlockComponent;
  let fixture: ComponentFixture<DashboardBannerBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBannerBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBannerBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
