import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';


@Component({
  selector: 'app-home-evento',
  templateUrl: './home-evento.page.html',
  styleUrls: ['./home-evento.page.scss'],
})
export class HomeEventoPage  {

  eventos = [];
  listaEventos = [];
  ref = firebase.database().ref('eventos/');
 


  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) { 

    this.ref.on('value', resp => {
      this.eventos = snapshotToArray(resp);
      this.listaEventos = this.eventos; 
    });

  }




  editEvento(key) {
    this.router.navigate(['/editEvento/'+key]);
  }

  filtrarItens(searchbar) {
    this.eventos = this.listaEventos;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.eventos = this.eventos.filter((v) => {
      if(v.evento_titulo && q) {
        if (v.evento_titulo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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
            firebase.database().ref('eventos/'+key).remove();
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
  




