import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHundredErrorComponent } from './five-hundred-error.component';

describe('FiveHundredErrorComponent', () => {
  let component: FiveHundredErrorComponent;
  let fixture: ComponentFixture<FiveHundredErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveHundredErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveHundredErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
