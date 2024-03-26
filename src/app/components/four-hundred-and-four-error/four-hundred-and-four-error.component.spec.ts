import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHundredAndFourErrorComponent } from './four-hundred-and-four-error.component';

describe('FourHundredAndFourErrorComponent', () => {
  let component: FourHundredAndFourErrorComponent;
  let fixture: ComponentFixture<FourHundredAndFourErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourHundredAndFourErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourHundredAndFourErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
