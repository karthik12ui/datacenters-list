/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinOurComponent } from './join-our.component';

describe('JoinOurComponent', () => {
  let component: JoinOurComponent;
  let fixture: ComponentFixture<JoinOurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinOurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
