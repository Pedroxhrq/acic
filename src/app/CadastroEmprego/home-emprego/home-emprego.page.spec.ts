import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEmpregoPage } from './home-emprego.page';

describe('HomeEmpregoPage', () => {
  let component: HomeEmpregoPage;
  let fixture: ComponentFixture<HomeEmpregoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEmpregoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEmpregoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
