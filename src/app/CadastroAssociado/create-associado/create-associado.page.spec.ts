import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssociadoPage } from './create-associado.page';

describe('CreateAssociadoPage', () => {
  let component: CreateAssociadoPage;
  let fixture: ComponentFixture<CreateAssociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssociadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
