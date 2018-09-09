import { Component } from '@angular/core';
import { BerandaAnggotaPage } from '../beranda-anggota/beranda-anggota';
import { DatadiriketuaPage } from '../datadiriketua/datadiriketua';
import { DatajadwalAnggotaPage } from '../datajadwal-anggota/datajadwal-anggota';

@Component({
  selector: 'page-tabsanggota',
  templateUrl: 'tabsanggota.html',
})
export class TabsanggotaPage {

  tab1Root = BerandaAnggotaPage;
  tab2Root = DatajadwalAnggotaPage;
  tab3Root = DatadiriketuaPage;

  constructor() {

  }

}
