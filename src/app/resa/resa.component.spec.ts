/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResaComponent } from './resa.component';

describe('ResaComponent', () => {
  let component: ResaComponent;
  let fixture: ComponentFixture<ResaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
