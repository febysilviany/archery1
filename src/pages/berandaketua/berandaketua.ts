import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatanilaiPage } from '../datanilai/datanilai';
import { DataklubPage } from '../dataklub/dataklub';
import { DatanilaiketuaPage } from '../datanilaiketua/datanilaiketua';


@Component({
  selector: 'page-berandaketua',
  templateUrl: 'berandaketua.html',
})
export class BerandaketuaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  NilaiAnggota(){
    this.navCtrl.push(DatanilaiketuaPage);
  }

  DataKlub(){
    this.navCtrl.push(DataklubPage);
  }


}
