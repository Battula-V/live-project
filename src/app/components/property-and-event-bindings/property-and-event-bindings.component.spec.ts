import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAndEventBindingsComponent } from './property-and-event-bindings.component';

describe('PropertyAndEventBindingsComponent', () => {
  let component: PropertyAndEventBindingsComponent;
  let fixture: ComponentFixture<PropertyAndEventBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyAndEventBindingsComponent]
    });
    fixture = TestBed.createComponent(PropertyAndEventBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
