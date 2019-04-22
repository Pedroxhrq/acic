import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssociadoPage } from './edit-associado.page';

describe('EditAssociadoPage', () => {
  let component: EditAssociadoPage;
  let fixture: ComponentFixture<EditAssociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssociadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
