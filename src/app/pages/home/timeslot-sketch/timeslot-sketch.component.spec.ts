import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotSketchComponent } from './timeslot-sketch.component';

describe('TimeslotSketchComponent', () => {
  let component: TimeslotSketchComponent;
  let fixture: ComponentFixture<TimeslotSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeslotSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeslotSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
