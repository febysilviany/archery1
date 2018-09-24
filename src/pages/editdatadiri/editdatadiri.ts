import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';


@Component({
  selector: 'page-editdatadiri',
  templateUrl: 'editdatadiri.html',
})
export class EditdatadiriPage {
  private Email:  string="";
  private Nama : string="";
  private Umur: string="";
  private TinggiBadan : string="";
  private JenisBusur:  string="";
  private PanjangBusur: string="";
  private KekuatanBusur: string="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view:ViewController,
    public penggunaProvider:PenggunaProvider,
    public toastCtrl: ToastController) 
    {
      var data = navParams.data;
      this.Email = data.Email;
      this.Nama = data.Nama;
      this.Umur = data.Umur;
      this.TinggiBadan = data.TinggiBadan;
      this.JenisBusur = data.JenisBusur;
      this.PanjangBusur = data.PanjangBusur;
      this.KekuatanBusur = data.KekuatanBusur;
  }

  closeModal(){
    this.view.dismiss();
  }

  simpanDataDiri(){
    var data = {
      "Nama" : this.Nama,
      "Umur" : this.Umur,
      "TinggiBadan" : this.TinggiBadan,
      "JenisBusur" : this.JenisBusur,
      "PanjangBusur" : this.PanjangBusur,
      "KekuatanBusur" : this.KekuatanBusur
    }

    this.penggunaProvider.editDataDiri(this.Email, data).subscribe((result) => {
      console.log(result);

      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Data diri telah diubah',
        duration : 3000
      });
      toast.present();

    });
  }


  

}
