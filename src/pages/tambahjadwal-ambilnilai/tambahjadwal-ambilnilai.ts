import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { JadwalLatihan } from '../../models/datajadwal';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { DatajadwalketuaPage } from '../datajadwalketua/datajadwalketua';
import { JadwalProvider } from '../../providers/jadwal/jadwal';
import { DatajadwalpelatihPage } from '../datajadwalpelatih/datajadwalpelatih';



@Component({
  selector: 'page-tambahjadwal-ambilnilai',
  templateUrl: 'tambahjadwal-ambilnilai.html',
})
export class TambahjadwalAmbilnilaiPage {
  hari_ini :  string;
  private jadwalAmbilNilaiList: JadwalLatihan[]=[];
  public Tanggal: string = "";
  public Waktu: string = "";
  public Deskripsi: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public datePicker : DatePicker,
    public alertCtrl:AlertController,
    public penggunaProvider:PenggunaProvider,
    public jadwalProvider:JadwalProvider,
    public toastCtrl: ToastController
  ) {
    this.hari_ini = new Date().toISOString();
  }

  simpanJadwalAmbilNilai(){
    console.log("tambahJadwalAmbilNilai");
    var data = {
      "Tanggal": this.Tanggal,
      "Waktu": this.Waktu,
      "Deskripsi": this.Deskripsi,    
    }
    console.log(data);
    this.jadwalProvider.tambahjadwalAmbilNilai(data).subscribe((result)=>{
      console.log(result);
      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Data jadwal ambil nilai telah ditambah',
        duration : 3000
      });
      toast.present();
      this.navCtrl.setRoot(DatajadwalpelatihPage);
    });
  }


}
