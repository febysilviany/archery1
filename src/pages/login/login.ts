import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsketuaPage } from '../tabsketua/tabsketua';
import { DaftarketuaPage } from '../daftarketua/daftarketua';
import { TabspelatihPage } from '../tabspelatih/tabspelatih';
import { TabsanggotaPage } from '../tabsanggota/tabsanggota';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private auth: AuthService,
    fb: FormBuilder) {

      this.loginForm = fb.group({
        Email: ['', Validators.compose([Validators.required, Validators.email])],
        Password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }


  login() {
		let data = this.loginForm.value;
		if (!data.Email) {
			return;
		}

		let credentials = {
			Email: data.Email,
			Password: data.Password
		};
		this.auth.Login(credentials)
			.then(
				(res) => {
          localStorage.setItem('firebaseuid', res.user.uid);
        },
				error => this.loginError = error.message
			);
  }


  pindahpagedaftar(){
    this.navCtrl.push(DaftarketuaPage);
  }

  ketuaklub(){
    this.navCtrl.push(TabsketuaPage);
  }

  pelatih(){
    this.navCtrl.push(TabspelatihPage);
  }

  anggota(){
    this.navCtrl.push(TabsanggotaPage);
  }


}
