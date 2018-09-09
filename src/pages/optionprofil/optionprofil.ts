import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { EditdatadiriPage } from '../editdatadiri/editdatadiri';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-optionprofil',
  templateUrl: 'optionprofil.html',
})
export class OptionprofilPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private auth: AuthService) {
  }

  //logout
  logout(){
    localStorage.clear();
    this.viewCtrl.dismiss();
    this.auth.logout();
  }

}
