import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController,ToastController } from 'ionic-angular';
import { TambahanggotaPage } from '../tambahanggota/tambahanggota';
import { Datadiri } from '../../models/datadiri';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { Klub } from '../../models/dataklub';
import { KlubProvider } from '../../providers/klub/klub';
import { EditdataklubPage } from '../editdataklub/editdataklub';


@Component({
  selector: 'page-dataklub',
  templateUrl: 'dataklub.html',
})
export class DataklubPage {
  private datadiriList: Datadiri[]=[];
  private dataklubList: Klub[]=[];
  Nama;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public penggunaProvider: PenggunaProvider,
    public alerCtrl:AlertController,
    public toastCtrl:ToastController,
    public klubProvider: KlubProvider,
    public modalCtrl:ModalController
    ) {
    }


  tambahAnggota(){
    this.navCtrl.push(TambahanggotaPage);
  }

  ngOnInit(){
    this.loadPengguna();
    this.loadDataKlub();
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

  loadDataKlub(){
    this.dataklubList =[];
    this.klubProvider.loadDataKlub()
      .subscribe((result)=>{
        console.log(result);
        this.dataklubList=result;
      });
    console.log(this.dataklubList);
  }

  loadPenggunabyNama(){
    this.datadiriList =[];
    this.penggunaProvider.loadPenggunabyNama(this.Nama)
      .subscribe((result)=>{
        console.log(result);
        this.datadiriList=result;
      });
    console.log(this.datadiriList);
  }

  editDataKlub(data){
    var modal  = this.modalCtrl.create(EditdataklubPage, data)
    modal.onDidDismiss(() => {
      this.navCtrl.setRoot(DataklubPage);
    })
    modal.present();
  }


  hapusPengguna(Email){
    let confirm = this.alerCtrl.create({
      title: 'Hapus',
      message: 'Anda yakin ingin menghapus anggota ini ?',
      buttons: [{
          text: 'Ya',
          handler: () => {
            this.penggunaProvider.hapusPengguna(Email).subscribe((result) => {
              console.log(result);
              this.loadPengguna();
            });
            
            let toast = this.toastCtrl.create({
              message: 'Data telah dihapus',
              duration : 3000
            });
            toast.present();
          }
        },
        {
          text: 'Batal',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    confirm.present()    
  }


}
