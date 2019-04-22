import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CadastroBeneficioPage } from './cadastro-beneficio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroBeneficioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroBeneficioPage]
})
export class CadastroBeneficioPageModule {}
