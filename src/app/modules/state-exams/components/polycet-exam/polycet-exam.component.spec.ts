import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolycetExamComponent } from './polycet-exam.component';

describe('PolycetExamComponent', () => {
  let component: PolycetExamComponent;
  let fixture: ComponentFixture<PolycetExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolycetExamComponent]
    });
    fixture = TestBed.createComponent(PolycetExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
