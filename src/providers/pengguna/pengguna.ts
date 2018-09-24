import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Datadiri } from '../../models/datadiri'; 
import * as firebase from 'firebase';

@Injectable()
export class PenggunaProvider {
  private datadiriList : Datadiri[] = [];
  private Email;
  firebaseUidKetua;
  
  constructor(public http: Http) {
  }

  cekStatus(){
    let firebaseUidKetua = localStorage.getItem('firebaseUidKetua')
    return this.http.get("http://localhost:8081/api/cekstatus/"+firebaseUidKetua);
  }

  loadPenggunabyNama(Nama: string){
    return this.http.get("http://localhost:8081/api/NamaPengguna/" +Nama)
      .map((response: Response) => {
        let data = response.json();
        this.datadiriList = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  loadPengguna(){
    console.log('test');
    let email = firebase.auth().currentUser.email;
    return this.http.get("http://localhost:8081/api/pengguna/"+email)
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
    var url = "http://localhost:8081/api/tambahpengguna";
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

  editDataKetuaPelatih(Email, data){
    var url = "http://localhost:8081/api/editdataketuapelatih/" + Email;
    return this.http.post(url, data);
  }

}
