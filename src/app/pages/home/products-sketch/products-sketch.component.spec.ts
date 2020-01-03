import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSketchComponent } from './products-sketch.component';

describe('ProductsSketchComponent', () => {
  let component: ProductsSketchComponent;
  let fixture: ComponentFixture<ProductsSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
