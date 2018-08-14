import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsTemplatesComponent } from './actions-templates.component';

describe('ActionsTemplatesComponent', () => {
  let component: ActionsTemplatesComponent;
  let fixture: ComponentFixture<ActionsTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
