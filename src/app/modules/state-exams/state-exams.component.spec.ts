import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateExamsComponent } from './state-exams.component';

describe('StateExamsComponent', () => {
  let component: StateExamsComponent;
  let fixture: ComponentFixture<StateExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateExamsComponent]
    });
    fixture = TestBed.createComponent(StateExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
