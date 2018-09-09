import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Datadiri } from '../../models/datadiri'; 

@Injectable()
export class PenggunaProvider {
  private datadiriList : Datadiri[] = [];

  firebaseUidKetua;
  constructor(public http: Http) {
    
  }

  cekStatus(){
    let firebaseUidKetua = localStorage.getItem('firebaseUidKetua')
    return this.http.get("http://localhost:8081/api/cekstatus/"+firebaseUidKetua);
  }

  loadPenggunabyNama(Nama: string){
    return this.http.get("http://localhost:8081/api/NamaPengguna/" +Nama+ "/pengguna")
      .map((response: Response) => {
        let data = response.json();
        this.datadiriList = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  loadPengguna(){
    return this.http.get("http://localhost:8081/api/pengguna")
      .map((response: Response) => {
        let data = response.json();
        this.datadiriList = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  hapusPengguna(Email){ 
    var url = "http://localhost:8081/api/pengguna/" + Email;
    return this.http.delete(url);
  }

  tambahPengguna(data){
    var url = "http://localhost:8081/api/pengguna";
    return this.http.post(url, data);
  }

  daftarKetua(data){
    var url = "http://localhost:8081/api/ketua";
    return this.http.post(url, data);
  }

  editDataDiri(Email, data){
    var url = "http://localhost:8081/api/pengguna/" + Email;
    return this.http.post(url, data);
  }

}
