import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECetComponent } from './e-cet.component';

describe('ECetComponent', () => {
  let component: ECetComponent;
  let fixture: ComponentFixture<ECetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECetComponent]
    });
    fixture = TestBed.createComponent(ECetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
