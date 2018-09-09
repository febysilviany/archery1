import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';



@Component({
  selector: 'page-ubah-password',
  templateUrl: 'ubah-password.html',
})
export class UbahPasswordPage {
  private Email:  string="";
  private Password: string="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view:ViewController,
    public penggunaProvider:PenggunaProvider,
    public toastCtrl: ToastController) 
    {
      var data = navParams.data;
      this.Password = data.Password;

  }

  closeModal(){
    this.view.dismiss();
  }

  simpanDataDiri(){
    var data = {
      "Password" : this.Password,
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
