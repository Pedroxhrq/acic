import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-noticia-beta',
  templateUrl: './noticia-beta.page.html',
  styleUrls: ['./noticia-beta.page.scss'],
})
export class NoticiaBetaPage  {


  constructor(private iab: InAppBrowser) {


   }
   openAqui(){
    this.iab.create('http://portalacic.com.br/noticias','_blanck' );

   }


}
