import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTemplateItemComponent } from './new-template-item.component';

describe('NewTemplateItemComponent', () => {
  let component: NewTemplateItemComponent;
  let fixture: ComponentFixture<NewTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTemplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
