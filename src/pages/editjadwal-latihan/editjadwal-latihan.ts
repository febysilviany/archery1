import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,ViewController } from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { JadwalProvider } from '../../providers/jadwal/jadwal';


@Component({
  selector: 'page-editjadwal-latihan',
  templateUrl: 'editjadwal-latihan.html',
})
export class EditjadwalLatihanPage {
  private ID_Jadwal : string="";
  private Tanggal:  string="";
  private Waktu: string="";
  private Deskripsi: string="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController,
    public toastCtrl:ToastController,
    public penggunaProvider:PenggunaProvider,
    public jadwalProvider: JadwalProvider) 
    {
      var data = navParams.data;
      this.ID_Jadwal = data.ID_Jadwal;
      this.Tanggal = data.Tanggal;
      this.Waktu = data.Waktu;
      this.Deskripsi = data.Deskripsi;
  }

  closeModal(){
    this.view.dismiss();
  }

  editjadwalLatihan(){
    var data = {
      "Tanggal": this.Tanggal,
      "Waktu": this.Waktu,
      "Deskripsi": this.Deskripsi
    }

    this.jadwalProvider.editjadwalLatihan(this.ID_Jadwal, data).subscribe((result) =>{
      console.log(result);

      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Data jadwal latihan telah diubah',
        duration : 3000
      });
      toast.present();
    });
  }
}
