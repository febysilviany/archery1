import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BerandapelatihPage } from '../berandapelatih/berandapelatih';
import { DatajadwalpelatihPage } from '../datajadwalpelatih/datajadwalpelatih';
import { DatadiriketuapelatihPage } from '../datadiriketuapelatih/datadiriketuapelatih';



@Component({
  selector: 'page-tabspelatih',
  templateUrl: 'tabspelatih.html',
})
export class TabspelatihPage {

  tab1Root = BerandapelatihPage;
  tab2Root = DatajadwalpelatihPage;
  tab3Root = DatadiriketuapelatihPage;

  constructor() {

  }

}
