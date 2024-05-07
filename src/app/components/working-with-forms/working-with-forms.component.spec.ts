import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithFormsComponent } from './working-with-forms.component';

describe('WorkingWithFormsComponent', () => {
  let component: WorkingWithFormsComponent;
  let fixture: ComponentFixture<WorkingWithFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkingWithFormsComponent]
    });
    fixture = TestBed.createComponent(WorkingWithFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
