import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';


@Component({
  selector: 'app-home-emprego',
  templateUrl: './home-emprego.page.html',
  styleUrls: ['./home-emprego.page.scss'],
})
export class HomeEmpregoPage  {

  empregos = [];
  listaEmpregos = [];
  ref = firebase.database().ref('empregos/');


  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) { 
    this.ref.on('value', resp => {
      this.empregos = snapshotToArray(resp);
      this.listaEmpregos = this.empregos; 
    });


  }




  editEmpregos(key) {
    this.router.navigate(['/editEmprego/'+key]);
  }

  filtrarItens(searchbar) {
    this.empregos = this.listaEmpregos;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.empregos = this.empregos.filter((v) => {
      if(v.emprego_cargo && q) {
        if (v.emprego_cargo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'A vaga será alterada para preenchida e Será excluida',
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
            firebase.database().ref('empregos/'+key).remove();
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
