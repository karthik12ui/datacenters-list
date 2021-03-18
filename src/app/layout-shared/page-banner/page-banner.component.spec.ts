/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageBannerComponent } from './page-banner.component';

describe('PageBannerComponent', () => {
  let component: PageBannerComponent;
  let fixture: ComponentFixture<PageBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
