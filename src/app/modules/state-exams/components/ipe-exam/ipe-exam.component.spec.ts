import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpeExamComponent } from './ipe-exam.component';

describe('IpeExamComponent', () => {
  let component: IpeExamComponent;
  let fixture: ComponentFixture<IpeExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpeExamComponent]
    });
    fixture = TestBed.createComponent(IpeExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
