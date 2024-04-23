import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingTypeTwoComponent } from './data-sharing-type-two.component';

describe('DataSharingTypeTwoComponent', () => {
  let component: DataSharingTypeTwoComponent;
  let fixture: ComponentFixture<DataSharingTypeTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingTypeTwoComponent]
    });
    fixture = TestBed.createComponent(DataSharingTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
