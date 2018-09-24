import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nilai } from '../../models/datanilai';
import { NilaiProvider } from '../../providers/nilai/nilai';



@Component({
  selector: 'page-datanilaipelatih',
  templateUrl: 'datanilaipelatih.html',
})
export class DatanilaipelatihPage {
  private datanilaiList: Nilai[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public nilaiProvider:NilaiProvider) {
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

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DatanilaipelatihPage');
  // }

}
