import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingGetApiComponent } from './calling-get-api.component';

describe('CallingGetApiComponent', () => {
  let component: CallingGetApiComponent;
  let fixture: ComponentFixture<CallingGetApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallingGetApiComponent]
    });
    fixture = TestBed.createComponent(CallingGetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
