import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSketchComponent } from './users-sketch.component';

describe('UsersSketchComponent', () => {
  let component: UsersSketchComponent;
  let fixture: ComponentFixture<UsersSketchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSketchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
