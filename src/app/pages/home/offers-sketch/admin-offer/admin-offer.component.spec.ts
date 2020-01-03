import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfferComponent } from './admin-offer.component';

describe('AdminOfferComponent', () => {
  let component: AdminOfferComponent;
  let fixture: ComponentFixture<AdminOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
