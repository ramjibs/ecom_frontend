import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCountComponent } from './orders-count.component';

describe('OrdersCountComponent', () => {
  let component: OrdersCountComponent;
  let fixture: ComponentFixture<OrdersCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
