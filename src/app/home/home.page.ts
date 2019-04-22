import { Component } from '@angular/core';
import { AlertController, NavController, ActionSheetController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  infos = [];
  ref = firebase.database().ref('infos/');

  constructor( private actionSheetCtrl:ActionSheetController,  private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });
  }
  
 async abrirPagina(){
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Action',
      buttons:[ 
        {
          text:'Empregos',
           role:'desctructive',
           icon:'home',
           handler:()=>
               {
                this.router.navigate(['/createEmprego']);
                }
        },
        
        {
          text:'Empregoss',
           role:'desctructive',
           icon:'home',
           handler:()=>
               {
                  console.log('ver');
                }
        }



  
]

});


await actionSheet.present();

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
