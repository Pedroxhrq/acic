import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaBetaPage } from './noticia-beta.page';

describe('NoticiaBetaPage', () => {
  let component: NoticiaBetaPage;
  let fixture: ComponentFixture<NoticiaBetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaBetaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaBetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
