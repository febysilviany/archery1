import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { EditjadwalLatihanPage } from '../editjadwal-latihan/editjadwal-latihan';
import { JadwalLatihan } from '../../models/datajadwal';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { JadwalProvider } from '../../providers/jadwal/jadwal';
import { TambahjadwalLatihanPage } from '../tambahjadwal-latihan/tambahjadwal-latihan';
import { EditjadwalAmbilnilaiPage } from '../editjadwal-ambilnilai/editjadwal-ambilnilai';
import { TambahjadwalAmbilnilaiPage } from '../tambahjadwal-ambilnilai/tambahjadwal-ambilnilai';


@Component({
  selector: 'page-datajadwalpelatih',
  templateUrl: 'datajadwalpelatih.html',
})
export class DatajadwalpelatihPage {
  private datajadwalList: JadwalLatihan[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alerCtrl:AlertController,
    public toastCtrl:ToastController,
    public modalCtrl:ModalController,
    public jadwalProvider:JadwalProvider
     ) {
    }

  tambahJadwalAmbilNilai(){
    this.navCtrl.push(TambahjadwalAmbilnilaiPage);
  }


  ngOnInit(){
    this.loadJadwal();
  }

  loadJadwal(){
    this.datajadwalList =[];
    this.jadwalProvider.loadJadwal()
      .subscribe((result)=>{
        console.log(result);
        this.datajadwalList=result;
      });
    console.log(this.datajadwalList);
  }

  editJadwalAmbilNilai(data){
    var modal  = this.modalCtrl.create(EditjadwalAmbilnilaiPage, data)
    modal.onDidDismiss(() => {
      this.navCtrl.setRoot(DatajadwalpelatihPage);
    })
    modal.present();
  }

  hapusJadwalAmbilNilai(ID_Jadwal) {
    let confirm = this.alerCtrl.create({
      title: 'Hapus',
      message: 'Anda yakin akan menghapus Jadwal ini ?',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            this.jadwalProvider.hapusjadwalAmbilNilai(ID_Jadwal).subscribe((result) => {
              console.log(result);
              this.navCtrl.setRoot(DatajadwalpelatihPage);
            });
            
            let toast = this.toastCtrl.create({
              message: 'Data jadwal latihan telah dihapus',
              duration : 3000
            });
            toast.present();
            console.log('Ya clicked');
          }
        },
        {
          text: 'Batal',
          handler: () => {
            console.log('Batal clicked');
          }
        }
      ]
    });
    confirm.present()
  }



}
