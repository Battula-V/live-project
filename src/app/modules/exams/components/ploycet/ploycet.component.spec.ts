import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PloycetComponent } from './ploycet.component';

describe('PloycetComponent', () => {
  let component: PloycetComponent;
  let fixture: ComponentFixture<PloycetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PloycetComponent]
    });
    fixture = TestBed.createComponent(PloycetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
