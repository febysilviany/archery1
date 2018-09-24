import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Datadiri } from '../../models/datadiri';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { DataklubPage } from '../dataklub/dataklub';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';



@Component({
  selector: 'page-tambahanggota',
  templateUrl: 'tambahanggota.html',
})
export class TambahanggotaPage {
  private datadiriList: Datadiri[]=[];
  private Status: string;
  private Nama: string = "";
  private Email: string = "";
  private Password: string = "";
  // private Umur: string = "";
  // private TinggiBadan: string = "";
  // private JenisBusur: string = "";
  // private PanjangBusur: string = "";
  // private KekuatanBusur: string = "";


  constructor(
    private auth: AuthService,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public penggunaProvider: PenggunaProvider) {
  }

  // tambahPengguna(){
  //   console.log("tambahPengguna");
  //   var data = {
  //     "Status": this.Status,
  //     "Nama": this.Nama,
  //     "Email": this.Email,
  //     "Password": this.Password,
  //     "Umur": this.Umur,
  //     "TinggiBadan": this.TinggiBadan,
  //     "JenisBusur": this.JenisBusur,
  //     "PanjangBusur": this.PanjangBusur,
  //     "KekuatanBusur": this.KekuatanBusur,
    
  //   }
  //     console.log(data);
  //     this.penggunaProvider.tambahPengguna(data).subscribe((result)=>{
  //       console.log(result);
  //       this.navCtrl.setRoot(DataklubPage);
  //     });
  // }

  tambahAnggota(){
    // var Email = firebase.auth().currentUser.email;
    var data = {
      "Status": this.Status,
      "Nama": this.Nama,
      "Email": this.Email,
      // "Umur": this.Umur,
      // "TinggiBadan": this.TinggiBadan,
      // "JenisBusur": this.JenisBusur,
      // "PanjangBusur": this.PanjangBusur,
      // "KekuatanBusur": this.KekuatanBusur,
    }
    console.log(data);
		this.auth.daftarPelatihAnggota(this.Email, this.Password).then(
			(newUser) => {
        data['FirebaseUID'] = newUser.user.uid;
        this.penggunaProvider.tambahPengguna(data).subscribe((result)=>{
          this.navCtrl.setRoot(DataklubPage);
        });
      }
    );
  }


}
