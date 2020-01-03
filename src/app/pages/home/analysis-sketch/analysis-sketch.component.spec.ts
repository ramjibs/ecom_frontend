import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisSketchComponent } from './analysis-sketch.component';

describe('AnalysisSketchComponent', () => {
  let component: AnalysisSketchComponent;
  let fixture: ComponentFixture<AnalysisSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
