import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayVariablesComponent } from './array-variables.component';

describe('ArrayVariablesComponent', () => {
  let component: ArrayVariablesComponent;
  let fixture: ComponentFixture<ArrayVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayVariablesComponent]
    });
    fixture = TestBed.createComponent(ArrayVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
