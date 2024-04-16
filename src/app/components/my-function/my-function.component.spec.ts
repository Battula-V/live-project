import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFunctionComponent } from './MyFunctionComponent';

describe('MyFunctionComponent', () => {
  let component: MyFunctionComponent;
  let fixture: ComponentFixture<MyFunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFunctionComponent]
    });
    fixture = TestBed.createComponent(MyFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
