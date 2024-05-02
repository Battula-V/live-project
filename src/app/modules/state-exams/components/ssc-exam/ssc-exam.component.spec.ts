import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SscExamComponent } from './ssc-exam.component';

describe('SscExamComponent', () => {
  let component: SscExamComponent;
  let fixture: ComponentFixture<SscExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SscExamComponent]
    });
    fixture = TestBed.createComponent(SscExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
