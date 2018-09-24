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
import { PenggunaProvider } from '../providers/pengguna/pengguna';
import { AuthService } from '../services/auth.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private afAuth: AngularFireAuth, private penggunaProvider: PenggunaProvider, private auth: AuthService) {
    platform.ready().then(() => {

      this.afAuth.authState.subscribe(user => {
        if(user) {
          // this.rootPage = CekStatusPage;
          this.penggunaProvider.loadPengguna().subscribe(res => {
            if(res && typeof res == "object" && res[0] != undefined && res[0].Status) {
              var status = res[0]['Status'];
              switch(status) {
                case "Pelatih":
                  this.rootPage = TabspelatihPage;
                  break;
                case "Anggota Klub":
                  this.rootPage = TabsanggotaPage;
                  break;
                case "Ketua Klub":
                  this.rootPage = TabsketuaPage;
                  break;
                default:
                  this.auth.logout();
                  this.rootPage = LoginPage;
                  break;
              }
            } else {
              this.auth.logout();
              this.rootPage = LoginPage;
            }
          })
        } else {
          this.rootPage = LoginPage;
        }
      })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 
  
}
