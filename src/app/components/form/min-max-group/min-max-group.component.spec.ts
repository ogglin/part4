import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxGroupComponent } from './min-max-group.component';

describe('MinMaxGroupComponent', () => {
  let component: MinMaxGroupComponent;
  let fixture: ComponentFixture<MinMaxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinMaxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinMaxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
