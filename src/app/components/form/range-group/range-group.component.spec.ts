import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeGroupComponent } from './range-group.component';

describe('RangeGroupComponent', () => {
  let component: RangeGroupComponent;
  let fixture: ComponentFixture<RangeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
