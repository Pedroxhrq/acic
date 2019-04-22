import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailEmpregoPage } from './detail-emprego.page';

const routes: Routes = [
  {
    path: '',
    component: DetailEmpregoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailEmpregoPage]
})
export class DetailEmpregoPageModule {}
