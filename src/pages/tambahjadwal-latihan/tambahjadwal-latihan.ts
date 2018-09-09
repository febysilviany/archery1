import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { JadwalLatihan } from '../../models/datajadwal';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { DatajadwalketuaPage } from '../datajadwalketua/datajadwalketua';
import { JadwalProvider } from '../../providers/jadwal/jadwal';


@Component({
  selector: 'page-tambahjadwal-latihan',
  templateUrl: 'tambahjadwal-latihan.html',
})
export class TambahjadwalLatihanPage {
  hari_ini :  string;
  private jadwalLatihanList: JadwalLatihan[]=[];
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

  simpanJadwalLatihan(){
    console.log("tambahJadwalLatihan");
    var data = {
      "Tanggal": this.Tanggal,
      "Waktu": this.Waktu,
      "Deskripsi": this.Deskripsi,    
    }
    console.log(data);
    this.jadwalProvider.tambahjadwalLatihan(data).subscribe((result)=>{
      console.log(result);
      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Data jadwal latihan telah ditambah',
        duration : 3000
      });
      toast.present();
      this.navCtrl.setRoot(DatajadwalketuaPage);
    });
  }

}
