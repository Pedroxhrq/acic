import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAmz8rGI01eIUGAc5nM40IjdPIdCH3s0u8",
  authDomain: "banco-bed46.firebaseapp.com",
  databaseURL: "https://banco-bed46.firebaseio.com",
  projectId: "banco-bed46",
  storageBucket: "banco-bed46.appspot.com",
  messagingSenderId: "42293200054"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
console.log();