import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorriesComponent } from './morries.component';

describe('MorriesComponent', () => {
  let component: MorriesComponent;
  let fixture: ComponentFixture<MorriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
