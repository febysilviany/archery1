import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';


@Component({
  selector: 'page-cek-status',
  templateUrl: 'cek-status.html',
})
export class CekStatusPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public penggunaProvider:PenggunaProvider) {
  }

  ionViewDidLoad(){
    this.penggunaProvider.cekStatus().subscribe(res => {
      console.log(res.json());
    })
  }

  

}
