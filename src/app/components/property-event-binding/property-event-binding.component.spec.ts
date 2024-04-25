import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventBindingComponent } from './property-event-binding.component';

describe('PropertyEventBindingComponent', () => {
  let component: PropertyEventBindingComponent;
  let fixture: ComponentFixture<PropertyEventBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyEventBindingComponent]
    });
    fixture = TestBed.createComponent(PropertyEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
