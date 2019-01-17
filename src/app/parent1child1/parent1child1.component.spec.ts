import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1child1Component } from './parent1child1.component';

describe('Parent1child1Component', () => {
  let component: Parent1child1Component;
  let fixture: ComponentFixture<Parent1child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent1child1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
