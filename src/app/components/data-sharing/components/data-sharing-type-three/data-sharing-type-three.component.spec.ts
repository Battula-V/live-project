import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingTypeThreeComponent } from './data-sharing-type-three.component';

describe('DataSharingTypeThreeComponent', () => {
  let component: DataSharingTypeThreeComponent;
  let fixture: ComponentFixture<DataSharingTypeThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSharingTypeThreeComponent]
    });
    fixture = TestBed.createComponent(DataSharingTypeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
