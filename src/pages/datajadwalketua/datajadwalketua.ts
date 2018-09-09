import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';
import { TambahjadwalLatihanPage } from '../tambahjadwal-latihan/tambahjadwal-latihan';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { JadwalLatihan } from '../../models/datajadwal';
import { EditjadwalLatihanPage } from '../editjadwal-latihan/editjadwal-latihan';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { JadwalProvider } from '../../providers/jadwal/jadwal';



@Component({
  selector: 'page-datajadwalketua',
  templateUrl: 'datajadwalketua.html',
})
export class DatajadwalketuaPage {
  private datajadwalList: JadwalLatihan[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public penggunaProvider: PenggunaProvider,
    public alerCtrl:AlertController,
    public toastCtrl:ToastController,
    public popoverCtrl: PopoverController,
    public modalCtrl:ModalController,
    public jadwalProvider:JadwalProvider
     ) {
    }

  tambahJadwalLatihan(){
    this.navCtrl.push(TambahjadwalLatihanPage);
  }

  // option(ID_Jadwal){
  //   const popover = this.popoverCtrl.create(OptionjadwalPelatihPage, ID_Jadwal);
  //   popover.present();
  // }

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

  editJadwalLatihan(data){
    var modal  = this.modalCtrl.create(EditjadwalLatihanPage, data)
    modal.onDidDismiss(() => {
      this.navCtrl.setRoot(DatajadwalketuaPage);
    })
    modal.present();
  }

  hapusJadwalLatihan(ID_Jadwal) {
    let confirm = this.alerCtrl.create({
      title: 'Hapus',
      message: 'Anda yakin akan menghapus Jadwal ini ?',
      buttons: [
        {
          text: 'Ya',
          handler: () => {
            this.jadwalProvider.hapusjadwalLatihan(ID_Jadwal).subscribe((result) => {
              console.log(result);
              this.navCtrl.setRoot(DatajadwalketuaPage);
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
