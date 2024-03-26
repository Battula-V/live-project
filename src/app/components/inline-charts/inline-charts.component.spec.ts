import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChartsComponent } from './inline-charts.component';

describe('InlineChartsComponent', () => {
  let component: InlineChartsComponent;
  let fixture: ComponentFixture<InlineChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
