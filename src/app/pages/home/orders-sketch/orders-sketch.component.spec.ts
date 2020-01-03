import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSketchComponent } from './orders-sketch.component';

describe('OrdersSketchComponent', () => {
  let component: OrdersSketchComponent;
  let fixture: ComponentFixture<OrdersSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
