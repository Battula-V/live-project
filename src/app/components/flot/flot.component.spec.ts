import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotComponent } from './flot.component';

describe('FlotComponent', () => {
  let component: FlotComponent;
  let fixture: ComponentFixture<FlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlotComponent]
    });
    fixture = TestBed.createComponent(FlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
