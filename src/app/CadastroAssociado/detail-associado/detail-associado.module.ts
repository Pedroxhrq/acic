import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailAssociadoPage } from './detail-associado.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAssociadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailAssociadoPage]
})
export class DetailAssociadoPageModule {}
