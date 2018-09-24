import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-buatform-nilai',
  templateUrl: 'buatform-nilai.html',
})
export class BuatformNilaiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuatformNilaiPage');
  }

}
