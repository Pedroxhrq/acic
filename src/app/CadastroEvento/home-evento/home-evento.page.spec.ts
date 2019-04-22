import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventoPage } from './home-evento.page';

describe('HomeEventoPage', () => {
  let component: HomeEventoPage;
  let fixture: ComponentFixture<HomeEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
