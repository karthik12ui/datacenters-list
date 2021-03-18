/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SocialIconsComponent } from './social-icons.component';

describe('SocialIconsComponent', () => {
  let component: SocialIconsComponent;
  let fixture: ComponentFixture<SocialIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
