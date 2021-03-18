/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageClipComponent } from './page-clip.component';

describe('PageClipComponent', () => {
  let component: PageClipComponent;
  let fixture: ComponentFixture<PageClipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
