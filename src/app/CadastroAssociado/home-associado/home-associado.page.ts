import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';


@Component({
  selector: 'app-home-associado',
  templateUrl: './home-associado.page.html',
  styleUrls: ['./home-associado.page.scss'],
})
export class HomeAssociadoPage  {

  associados = [];
  listaAssociados = [];
  ref = firebase.database().ref('associados/');
 


  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {

    this.ref.on('value', resp => {
      this.associados = snapshotToArray(resp);
      this.listaAssociados = this.associados; 
    });

   }




   editAssociado(key) {
    this.router.navigate(['/editAssociado/'+key]);
  }

  filtrarItens(searchbar) {
    this.associados = this.listaAssociados;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.associados = this.associados.filter((v) => {
      if(v.associado_nome && q) {
        if (v.associado_nome.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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
            firebase.database().ref('associados/'+key).remove();
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
