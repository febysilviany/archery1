import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TabsketuaPage } from '../pages/tabsketua/tabsketua';
import { TabspelatihPage } from '../pages/tabspelatih/tabspelatih';
import { TabsanggotaPage } from '../pages/tabsanggota/tabsanggota';
import { AngularFireAuth } from 'angularfire2/auth'
import { CekStatusPage } from '../pages/cek-status/cek-status';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsketuaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth) {
    platform.ready().then(() => {

      // this.afAuth.authState.subscribe(user => {
      //   if(user) {
      //     this.rootPage = CekStatusPage;
      //   } else {
      //     this.rootPage = LoginPage;
      //   }
        
      // })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 
  
}
