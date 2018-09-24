import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { KlubProvider } from '../../providers/klub/klub';


@Component({
  selector: 'page-editdataklub',
  templateUrl: 'editdataklub.html',
})
export class EditdataklubPage {
  private IDKlub: string="";
  private NamaKlub: string="";
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view:ViewController,
    public klubProvider:KlubProvider,
    public toastCtrl: ToastController) 
    {
      var data = navParams.data;
      this.IDKlub = data.IDKlub;
      this.NamaKlub = data.NamaKlub;
  }

  closemodal(){
    this.view.dismiss();
  }

  simpanDataKlub(){
    var data = {
      "NamaKlub" : this.NamaKlub
    }

    this.klubProvider.editDataKlub(this.IDKlub, data).subscribe((result) => {
      console.log(result);

      this.navCtrl.pop();
      let toast = this.toastCtrl.create({
        message: 'Nama Klub telah diubah',
        duration : 3000
      });
      toast.present();

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditdataklubPage');
  }

}
