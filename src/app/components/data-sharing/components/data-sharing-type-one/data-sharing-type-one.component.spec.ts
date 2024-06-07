import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingTypeOneComponent } from './data-sharing-type-one.component';

describe('DataSharingTypeOneComponent', () => {
  let component: DataSharingTypeOneComponent;
  let fixture: ComponentFixture<DataSharingTypeOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingTypeOneComponent]
    });
    fixture = TestBed.createComponent(DataSharingTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
