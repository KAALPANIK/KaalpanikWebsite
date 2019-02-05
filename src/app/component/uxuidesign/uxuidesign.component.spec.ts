import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UXUIDesignComponent } from './uxuidesign.component';

describe('UXUIDesignComponent', () => {
  let component: UXUIDesignComponent;
  let fixture: ComponentFixture<UXUIDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UXUIDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UXUIDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
