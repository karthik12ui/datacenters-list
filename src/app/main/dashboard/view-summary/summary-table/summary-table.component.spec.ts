/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SummaryTableComponent } from './summary-table.component';

describe('SummaryTableComponent', () => {
  let component: SummaryTableComponent;
  let fixture: ComponentFixture<SummaryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
