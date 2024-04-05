import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectVariableComponent } from './object-variable.component';

describe('ObjectVariableComponent', () => {
  let component: ObjectVariableComponent;
  let fixture: ComponentFixture<ObjectVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectVariableComponent]
    });
    fixture = TestBed.createComponent(ObjectVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
