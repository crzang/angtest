import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConfirmComponent } from './template-confirm.component';

describe('TemplateConfirmComponent', () => {
  let component: TemplateConfirmComponent;
  let fixture: ComponentFixture<TemplateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
