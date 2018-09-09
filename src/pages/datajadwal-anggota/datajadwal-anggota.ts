import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { PenggunaProvider } from '../../providers/pengguna/pengguna';
import { JadwalLatihan } from '../../models/datajadwal';
import { JadwalProvider } from '../../providers/jadwal/jadwal';


@Component({
  selector: 'page-datajadwal-anggota',
  templateUrl: 'datajadwal-anggota.html',
})
export class DatajadwalAnggotaPage {
  private datajadwalList: JadwalLatihan[]=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public penggunaProvider: PenggunaProvider,
    public jadwalProvider:JadwalProvider
  ) {
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
}
