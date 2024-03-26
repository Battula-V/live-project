import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHundredFourErrorComponent } from './four-hundred-four-error.component';

describe('FourHundredFourErrorComponent', () => {
  let component: FourHundredFourErrorComponent;
  let fixture: ComponentFixture<FourHundredFourErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourHundredFourErrorComponent]
    });
    fixture = TestBed.createComponent(FourHundredFourErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
