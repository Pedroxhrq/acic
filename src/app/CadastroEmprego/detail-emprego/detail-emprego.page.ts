import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-detail-emprego',
  templateUrl: './detail-emprego.page.html',
  styleUrls: ['./detail-emprego.page.scss'],
})
export class DetailEmpregoPage implements OnInit {

  emprego = {};

  constructor(private route: ActivatedRoute,
    public router: Router) {

      firebase.database().ref('empregos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
        this.emprego = snapshotToObject(resp);
      });



     }

  ngOnInit() {
  }}

  export const snapshotToObject = snapshot => {
    let item = snapshot.val();
    item.key = snapshot.key;
  
    return item;

}
