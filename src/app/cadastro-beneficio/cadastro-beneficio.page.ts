import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-cadastro-beneficio',
  templateUrl: './cadastro-beneficio.page.html',
  styleUrls: ['./cadastro-beneficio.page.scss'],
})
export class CadastroBeneficioPage {
  
  infos = [];
  ref = firebase.database().ref('infos/');


  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
  }

  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Realmente Deseja Excluir?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
