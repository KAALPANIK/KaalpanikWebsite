import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDevelopComponent } from './we-develop.component';

describe('WeDevelopComponent', () => {
  let component: WeDevelopComponent;
  let fixture: ComponentFixture<WeDevelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeDevelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
