import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';


@Component({
  selector: 'page-editdataketuapelatih',
  templateUrl: 'editdataketuapelatih.html',
})
export class EditdataketuapelatihPage {
  private Email:  string="";
  private Nama : string="";
  private Umur: string="";

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
  }

  closeModal(){
    this.view.dismiss();
  }

  simpanDataDiri(){
    var data = {
      "Nama" : this.Nama,
      "Umur" : this.Umur
    }

    this.penggunaProvider.editDataKetuaPelatih(this.Email, data).subscribe((result) => {
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
