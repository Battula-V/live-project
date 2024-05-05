import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingApisComponent } from './calling-apis.component';

describe('CallingApisComponent', () => {
  let component: CallingApisComponent;
  let fixture: ComponentFixture<CallingApisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallingApisComponent]
    });
    fixture = TestBed.createComponent(CallingApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
