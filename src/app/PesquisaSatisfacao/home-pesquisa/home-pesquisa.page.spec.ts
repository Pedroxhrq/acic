import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePesquisaPage } from './home-pesquisa.page';

describe('HomePesquisaPage', () => {
  let component: HomePesquisaPage;
  let fixture: ComponentFixture<HomePesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePesquisaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
