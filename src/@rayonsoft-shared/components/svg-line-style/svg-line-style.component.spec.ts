/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgLineStyleComponent } from './svg-line-style.component';

describe('SvgLineStyleComponent', () => {
  let component: SvgLineStyleComponent;
  let fixture: ComponentFixture<SvgLineStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgLineStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgLineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
