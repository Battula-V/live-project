import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingMultipleProjectsComponent } from './creating-multiple-projects.component';

describe('CreatingMultipleProjectsComponent', () => {
  let component: CreatingMultipleProjectsComponent;
  let fixture: ComponentFixture<CreatingMultipleProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatingMultipleProjectsComponent]
    });
    fixture = TestBed.createComponent(CreatingMultipleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
