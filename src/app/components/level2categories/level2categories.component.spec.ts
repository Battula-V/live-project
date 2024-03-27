import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2categoriesComponent } from './level2categories.component';

describe('Level2categoriesComponent', () => {
  let component: Level2categoriesComponent;
  let fixture: ComponentFixture<Level2categoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2categoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2categoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
