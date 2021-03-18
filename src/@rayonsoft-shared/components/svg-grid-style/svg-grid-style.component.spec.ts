/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgGridStyleComponent } from './svg-grid-style.component';

describe('SvgGridStyleComponent', () => {
  let component: SvgGridStyleComponent;
  let fixture: ComponentFixture<SvgGridStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgGridStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgGridStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
