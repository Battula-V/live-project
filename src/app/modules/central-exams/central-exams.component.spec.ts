import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralExamsComponent } from './central-exams.component';

describe('CentralExamsComponent', () => {
  let component: CentralExamsComponent;
  let fixture: ComponentFixture<CentralExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralExamsComponent]
    });
    fixture = TestBed.createComponent(CentralExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
