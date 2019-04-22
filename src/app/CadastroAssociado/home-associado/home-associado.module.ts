import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



import { HomeAssociadoPage } from './home-associado.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAssociadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeAssociadoPage]
})
export class HomeAssociadoPageModule {}
