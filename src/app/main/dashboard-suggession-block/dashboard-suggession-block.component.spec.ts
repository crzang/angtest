import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuggessionBlockComponent } from './dashboard-suggession-block.component';

describe('DashboardSuggessionBlockComponent', () => {
  let component: DashboardSuggessionBlockComponent;
  let fixture: ComponentFixture<DashboardSuggessionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSuggessionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSuggessionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
