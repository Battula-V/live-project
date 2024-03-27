import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1categoriesComponent } from './level1categories.component';

describe('Level1categoriesComponent', () => {
  let component: Level1categoriesComponent;
  let fixture: ComponentFixture<Level1categoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1categoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1categoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
