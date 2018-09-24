import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatanilaiPage } from '../datanilai/datanilai';
import { DataklubPage } from '../dataklub/dataklub';
import { DatanilaipelatihPage } from '../datanilaipelatih/datanilaipelatih';



@Component({
  selector: 'page-berandapelatih',
  templateUrl: 'berandapelatih.html',
})
export class BerandapelatihPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  NilaiAnggota(){
    this.navCtrl.push(DatanilaipelatihPage);
  }

  AbsenAnggota(){
    this.navCtrl.push(DataklubPage);
  }


}
