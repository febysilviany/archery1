import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuatformNilaiPage } from '../buatform-nilai/buatform-nilai';
import { Nilai } from '../../models/datanilai';
import { NilaiProvider } from '../../providers/nilai/nilai';



@Component({
  selector: 'page-datanilaiketua',
  templateUrl: 'datanilaiketua.html',
})
export class DatanilaiketuaPage {
  private datanilaiList: Nilai[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public nilaiProvider:NilaiProvider) {
  }

  buatformNilaiLatihan(){
    this.navCtrl.push(BuatformNilaiPage);
  }

  ngOnInit(){
    this.loadDataNilai();
  }

  loadDataNilai(){
    this.datanilaiList =[];
    this.nilaiProvider.loadDataNilai()
      .subscribe((result)=>{
        console.log(result);
        this.datanilaiList=result;
      });
    console.log(this.datanilaiList);
  }


}
