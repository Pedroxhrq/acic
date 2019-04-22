import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detail-associado',
  templateUrl: './detail-associado.page.html',
  styleUrls: ['./detail-associado.page.scss'],
})
export class DetailAssociadoPage implements OnInit {

  associado = {};

  constructor(private route: ActivatedRoute,
    public router: Router) {
      firebase.database().ref('associados/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
        this.associado = snapshotToObject(resp);
      });


    }

  ngOnInit() {
  }


}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
