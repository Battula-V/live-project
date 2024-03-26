import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrisComponent } from './morris.component';

describe('MorrisComponent', () => {
  let component: MorrisComponent;
  let fixture: ComponentFixture<MorrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MorrisComponent]
    });
    fixture = TestBed.createComponent(MorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
