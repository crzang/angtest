import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2cardConfirmComponent } from './card2card-confirm.component';

describe('Card2cardConfirmComponent', () => {
  let component: Card2cardConfirmComponent;
  let fixture: ComponentFixture<Card2cardConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card2cardConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card2cardConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
