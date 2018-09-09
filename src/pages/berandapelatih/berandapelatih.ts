import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatanilaiPage } from '../datanilai/datanilai';
import { DataklubPage } from '../dataklub/dataklub';



@Component({
  selector: 'page-berandapelatih',
  templateUrl: 'berandapelatih.html',
})
export class BerandapelatihPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  NilaiAnggota(){
    this.navCtrl.push(DatanilaiPage);
  }

  AbsenAnggota(){
    this.navCtrl.push(DataklubPage);
  }


}
