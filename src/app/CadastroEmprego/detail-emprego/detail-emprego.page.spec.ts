import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpregoPage } from './detail-emprego.page';

describe('DetailEmpregoPage', () => {
  let component: DetailEmpregoPage;
  let fixture: ComponentFixture<DetailEmpregoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEmpregoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpregoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
