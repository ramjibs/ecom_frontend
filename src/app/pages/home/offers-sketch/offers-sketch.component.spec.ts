import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersSketchComponent } from './offers-sketch.component';

describe('OffersSketchComponent', () => {
  let component: OffersSketchComponent;
  let fixture: ComponentFixture<OffersSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
