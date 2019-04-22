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
  listaInfos =[];
  ref = firebase.database().ref('infos/');


  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {

      this.infos = snapshotToArray(resp);
      this.listaInfos = this.infos;
    });
  }

  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  filtrarItens(searchbar) {
    this.infos = this.listaInfos;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.infos = this.infos.filter((v) => {
      if(v.info_title && q) {
        if (v.info_title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
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
