import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { Loading, LoadingController, AlertController, Alert } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TabsketuaPage } from '../tabsketua/tabsketua';
import { LoginPage } from '../login/login';
import { Datadiri } from '../../models/datadiri';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';


@Component({
  selector: 'page-daftarketua',
  templateUrl: 'daftarketua.html',
})
export class DaftarketuaPage {
  // signupError: string;
  // form: FormGroup;
  private datadiriList: Datadiri[]=[];
  private Status: string;
  private Nama: string = "";
  private Email: string = "";
  private Password: string = "";
  private Umur: string = "";
  private TinggiBadan: string = "";
  private JenisBusur: string = "";
  private PanjangBusur: string = "";
  private KekuatanBusur: string = "";

  constructor(
    //fb: FormBuilder,
    public navCtrl: NavController, 
    private auth: AuthService,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public penggunaProvider:PenggunaProvider
  ) {

      // this.form = fb.group({
      //   email: ['', Validators.compose([Validators.required, Validators.email])],
      //   password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      // });

  }

  // daftarKetuaKlub(){
  //   let data = this.form.value;
	// 	let credentials = {
	// 		email: data.email,
	// 		password: data.password
  //   };
	// 	this.auth.signUp(credentials).then(
	// 		() => this.navCtrl.setRoot(LoginPage),
	// 		error => this.signupError = error.message
  //   );
  // }

  daftarKetua(){
    let data = {
      "Status": this.Status,
      "Nama": this.Nama,
      "Email": this.Email,
      "Umur": this.Umur 
    };
		this.auth.daftarKetua(this.Email, this.Password).then(
			(ketua) => {
        localStorage.setItem('firebaseUidKetua', ketua.user.uid);
        data['FirebaseUID'] = ketua.user.uid;
        this.penggunaProvider.daftarKetua(data).subscribe((result)=>{
              
        });
      }
    );
  }


}
