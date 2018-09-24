import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { Nilai } from '../../models/datanilai';
import { NilaiProvider } from '../../providers/nilai/nilai';
import { DatanilaiPeranggotaPage } from '../datanilai-peranggota/datanilai-peranggota';
import * as firebase from 'firebase';

@Component({
  selector: 'page-tambah-nilai',
  templateUrl: 'tambah-nilai.html',
})
export class TambahNilaiPage {
  hari_ini :  string;
 // private nilaiList: Nilai[]=[];
  private Tanggal: string = "";
  private TotalRambahan1: number[]=[];
  private TotalRambahan2: number[]=[1,2,3,4,5,6];
  private TotalRambahan3: number[]=[1,2,3,4,5,6];
  private TotalRambahan4: number[]=[1,2,3,4,5,6];
  private TotalRambahan5: number[]=[1,2,3,4,5,6];
  private TotalRambahan6: number[]=[1,2,3,4,5,6];
  private EmailPengguna;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl:ToastController,
    public nilaiProvider: NilaiProvider) {
      this.EmailPengguna = firebase.auth().currentUser.email;
      
  }

  
  tambahNilai(){
    console.log("tambah nilai");
    var TotalRambahan1 = this.TotalRambahan1;
    var TotalRambahan2 = this.TotalRambahan2;
    var TotalRambahan3 = this.TotalRambahan3;
    var TotalRambahan4 = this.TotalRambahan4;
    var TotalRambahan5 = this.TotalRambahan5;
    var TotalRambahan6 = this.TotalRambahan6;


    var data = {
      "Tanggal": this.Tanggal,
      "TotalRambahan1": JSON.stringify(TotalRambahan1),
      "TotalRambahan2": JSON.stringify(TotalRambahan2),
      "TotalRambahan3": JSON.stringify(TotalRambahan3),
      "TotalRambahan4": JSON.stringify(TotalRambahan4),
      "TotalRambahan5": JSON.stringify(TotalRambahan5),
      "TotalRambahan6": JSON.stringify(TotalRambahan6),
      "EmailPengguna": this.EmailPengguna,   
    }
    console.log(data);

    this.nilaiProvider.tambahNilai(data).subscribe((result)=>{
      console.log(result);
      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Data nilai telah ditambah',
        duration : 3000
      });
      toast.present();
      this.navCtrl.setRoot(DatanilaiPeranggotaPage);
    });
  }


}
