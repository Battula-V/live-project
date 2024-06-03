import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifeCycleHooksComponent } from './angular-life-cycle-hooks.component';

describe('AngularLifeCycleHooksComponent', () => {
  let component: AngularLifeCycleHooksComponent;
  let fixture: ComponentFixture<AngularLifeCycleHooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularLifeCycleHooksComponent]
    });
    fixture = TestBed.createComponent(AngularLifeCycleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
