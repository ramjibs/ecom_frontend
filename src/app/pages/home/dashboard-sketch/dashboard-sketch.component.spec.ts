import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSketchComponent } from './dashboard-sketch.component';

describe('DashboardSketchComponent', () => {
  let component: DashboardSketchComponent;
  let fixture: ComponentFixture<DashboardSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
