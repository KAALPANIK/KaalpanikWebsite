import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsBigDataComponent } from './analytics-big-data.component';

describe('AnalyticsBigDataComponent', () => {
  let component: AnalyticsBigDataComponent;
  let fixture: ComponentFixture<AnalyticsBigDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsBigDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsBigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
