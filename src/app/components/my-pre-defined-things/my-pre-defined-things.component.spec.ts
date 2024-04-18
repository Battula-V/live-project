import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPreDefinedThingsComponent } from './my-pre-defined-things.component';

describe('MyPreDefinedThingsComponent', () => {
  let component: MyPreDefinedThingsComponent;
  let fixture: ComponentFixture<MyPreDefinedThingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyPreDefinedThingsComponent]
    });
    fixture = TestBed.createComponent(MyPreDefinedThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
