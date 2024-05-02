import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFoodComponent } from './online-food.component';

describe('OnlineFoodComponent', () => {
  let component: OnlineFoodComponent;
  let fixture: ComponentFixture<OnlineFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineFoodComponent]
    });
    fixture = TestBed.createComponent(OnlineFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
