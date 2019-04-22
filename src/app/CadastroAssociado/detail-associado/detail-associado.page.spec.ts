import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssociadoPage } from './detail-associado.page';

describe('DetailAssociadoPage', () => {
  let component: DetailAssociadoPage;
  let fixture: ComponentFixture<DetailAssociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAssociadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAssociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
