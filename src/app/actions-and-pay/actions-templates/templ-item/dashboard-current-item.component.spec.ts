import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCurrentItemComponent } from './template-item.component';

describe('DashboardCurrentItemComponent', () => {
  let component: DashboardCurrentItemComponent;
  let fixture: ComponentFixture<DashboardCurrentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCurrentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCurrentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
