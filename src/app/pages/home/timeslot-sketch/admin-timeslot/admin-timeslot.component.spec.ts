import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimeslotComponent } from './admin-timeslot.component';

describe('AdminTimeslotComponent', () => {
  let component: AdminTimeslotComponent;
  let fixture: ComponentFixture<AdminTimeslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTimeslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
