import { Component } from '@angular/core';
import { BerandaketuaPage } from '../berandaketua/berandaketua';
import { DatajadwalketuaPage } from '../datajadwalketua/datajadwalketua';
import { DatadiriketuapelatihPage } from '../datadiriketuapelatih/datadiriketuapelatih';


@Component({
  selector: 'page-tabsketua',
  templateUrl: 'tabsketua.html',
})
export class TabsketuaPage {

  tab1Root = BerandaketuaPage;
  tab2Root = DatajadwalketuaPage;
  tab3Root = DatadiriketuapelatihPage;

  constructor() {

  }

}
