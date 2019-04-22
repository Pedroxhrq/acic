import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpregoPage } from './create-emprego.page';

describe('CreateEmpregoPage', () => {
  let component: CreateEmpregoPage;
  let fixture: ComponentFixture<CreateEmpregoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmpregoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpregoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
