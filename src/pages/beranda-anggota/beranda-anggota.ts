import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatanilaiPeranggotaPage } from '../datanilai-peranggota/datanilai-peranggota';
import { TambahNilaiPage } from '../tambah-nilai/tambah-nilai';



@Component({
  selector: 'page-beranda-anggota',
  templateUrl: 'beranda-anggota.html',
})
export class BerandaAnggotaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  NilaiSaya(){
    this.navCtrl.push(DatanilaiPeranggotaPage);
  }

  TambahNilai(){
    this.navCtrl.push(TambahNilaiPage)
  }


}
