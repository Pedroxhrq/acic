import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage  {
noticias = [];
listaNoticias = [];
ref = firebase.database().ref('noticias/');
  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) { 

    this.ref.on('value', resp => {

      this.noticias = snapshotToArray(resp);
      this.listaNoticias = this.noticias;
    });


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