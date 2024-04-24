import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingTypeFourComponent } from './data-sharing-type-four.component';

describe('DataSharingTypeFourComponent', () => {
  let component: DataSharingTypeFourComponent;
  let fixture: ComponentFixture<DataSharingTypeFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingTypeFourComponent]
    });
    fixture = TestBed.createComponent(DataSharingTypeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
