import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockChainServicesComponent } from './block-chain-services.component';

describe('BlockChainServicesComponent', () => {
  let component: BlockChainServicesComponent;
  let fixture: ComponentFixture<BlockChainServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockChainServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockChainServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
