import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuggessionBlockItemComponent } from './dashboard-suggession-block-item.component';

describe('DashboardSuggessionBlockItemComponent', () => {
  let component: DashboardSuggessionBlockItemComponent;
  let fixture: ComponentFixture<DashboardSuggessionBlockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSuggessionBlockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSuggessionBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
