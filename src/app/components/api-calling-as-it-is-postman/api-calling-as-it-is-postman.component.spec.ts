import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallingAsItIsPostmanComponent } from './api-calling-as-it-is-postman.component';

describe('ApiCallingAsItIsPostmanComponent', () => {
  let component: ApiCallingAsItIsPostmanComponent;
  let fixture: ComponentFixture<ApiCallingAsItIsPostmanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallingAsItIsPostmanComponent]
    });
    fixture = TestBed.createComponent(ApiCallingAsItIsPostmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
