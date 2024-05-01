import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JntuExamComponent } from './jntu-exam.component';

describe('JntuExamComponent', () => {
  let component: JntuExamComponent;
  let fixture: ComponentFixture<JntuExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JntuExamComponent]
    });
    fixture = TestBed.createComponent(JntuExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
