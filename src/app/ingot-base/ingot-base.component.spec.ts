import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngotBaseComponent } from './ingot-base.component';

describe('IngotBaseComponent', () => {
  let component: IngotBaseComponent;
  let fixture: ComponentFixture<IngotBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngotBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngotBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
