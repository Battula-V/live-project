import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectVariablesComponent } from './object-variables.component';

describe('ObjectVariablesComponent', () => {
  let component: ObjectVariablesComponent;
  let fixture: ComponentFixture<ObjectVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectVariablesComponent]
    });
    fixture = TestBed.createComponent(ObjectVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
