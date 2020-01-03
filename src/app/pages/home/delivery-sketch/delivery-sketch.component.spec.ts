import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySketchComponent } from './delivery-sketch.component';

describe('DeliverySketchComponent', () => {
  let component: DeliverySketchComponent;
  let fixture: ComponentFixture<DeliverySketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverySketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
