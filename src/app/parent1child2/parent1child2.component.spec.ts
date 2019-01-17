import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent1child2Component } from './parent1child2.component';

describe('Parent1child2Component', () => {
  let component: Parent1child2Component;
  let fixture: ComponentFixture<Parent1child2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parent1child2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parent1child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
