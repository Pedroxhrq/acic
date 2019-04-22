import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detail-evento',
  templateUrl: './detail-evento.page.html',
  styleUrls: ['./detail-evento.page.scss'],
})
export class DetailEventoPage implements OnInit {

  evento = {};

  constructor(private route: ActivatedRoute,
    public router: Router) {
      firebase.database().ref('eventos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
        this.evento = snapshotToObject(resp);
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
