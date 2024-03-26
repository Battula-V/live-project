import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTablesComponent } from './simple-tables.component';

describe('SimpleTablesComponent', () => {
  let component: SimpleTablesComponent;
  let fixture: ComponentFixture<SimpleTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
