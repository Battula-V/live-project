import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EamcetComponent } from './eamcet.component';

describe('EamcetComponent', () => {
  let component: EamcetComponent;
  let fixture: ComponentFixture<EamcetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EamcetComponent]
    });
    fixture = TestBed.createComponent(EamcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
