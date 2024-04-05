import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayVariableComponent } from './array-variable.component';

describe('ArrayVariableComponent', () => {
  let component: ArrayVariableComponent;
  let fixture: ComponentFixture<ArrayVariableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayVariableComponent]
    });
    fixture = TestBed.createComponent(ArrayVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
