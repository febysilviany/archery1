import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Datadiri } from '../../models/datadiri';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EditdatadiriPage } from '../editdatadiri/editdatadiri';
import { PopoverController } from 'ionic-angular';
import { OptionprofilPage } from '../optionprofil/optionprofil';
import { UbahPasswordPage } from '../ubah-password/ubah-password';


@Component({
  selector: 'page-datadiriketua',
  templateUrl: 'datadiriketua.html',
})
export class DatadiriketuaPage {
  private datadiriList: Datadiri[]=[];

  constructor(
    public popoverCtrl: PopoverController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public penggunaProvider:PenggunaProvider,
    public modalCtrl: ModalController) {
  }

  ngOnInit(){
    this.loadPengguna();
  }

  loadPengguna(){
    this.datadiriList =[];
    this.penggunaProvider.loadPengguna()
      .subscribe((result)=>{
        console.log(result);
        this.datadiriList=result;
      });
    console.log(this.datadiriList);
  }

  editDataDiri(data){
    var modal  = this.modalCtrl.create(EditdatadiriPage, data)
    modal.onDidDismiss(() => {
      this.navCtrl.setRoot(DatadiriketuaPage);
    })
    modal.present();
  }

  editPassword(data){
    var modal  = this.modalCtrl.create(UbahPasswordPage, data)
    modal.onDidDismiss(() => {
      this.navCtrl.setRoot(DatadiriketuaPage);
    })
    modal.present();
  }

  option() {
    const popover = this.popoverCtrl.create(OptionprofilPage);
    popover.present();
  }



  

}
