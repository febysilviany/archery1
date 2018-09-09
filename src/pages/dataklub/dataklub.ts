import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TambahanggotaPage } from '../tambahanggota/tambahanggota';
import { Datadiri } from '../../models/datadiri';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';

@Component({
  selector: 'page-dataklub',
  templateUrl: 'dataklub.html',
})
export class DataklubPage {
  private datadiriList: Datadiri[]=[];
  Nama;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public penggunaProvider: PenggunaProvider,
    public alerCtrl:AlertController,
    public toastCtrl:ToastController
    ) {
    }


  tambahAnggota(){
    this.navCtrl.push(TambahanggotaPage);
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

  loadPenggunabyNama(){
    this.datadiriList =[];
    this.penggunaProvider.loadPenggunabyNama(this.Nama)
      .subscribe((result)=>{
        console.log(result);
        this.datadiriList=result;
      });
    console.log(this.datadiriList);
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
