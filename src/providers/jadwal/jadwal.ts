import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { JadwalLatihan } from '../../models/datajadwal';


@Injectable()
export class JadwalProvider {
  private datajadwalList: JadwalLatihan[]=[];

  constructor(public http: Http) {
    console.log('Hello JadwalProvider Provider');
  }

  loadJadwal(){
    return this.http.get("http://localhost:8081/api/jadwal")
      .map((response: Response) => {
        let data = response.json();
        this.datajadwalList = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  tambahjadwalLatihan(data){
    var url = "http://localhost:8081/api/jadwal";
    return this.http.post(url, data);
  }

  editjadwalLatihan(ID_Jadwal, data){
    var url ="http://localhost:8081/api/jadwal/"+ID_Jadwal;
    return this.http.post(url, data);
  }

  hapusjadwalLatihan(ID_Jadwal){ 
    var url = "http://localhost:8081/api/jadwal/"+ID_Jadwal;
    return this.http.delete(url);
  }

  tambahjadwalAmbilNilai(data){
    var url = "http://localhost:8081/api/j_ambilnilai";
    return this.http.post(url, data);
  }

  editjadwalAmbilNilai(ID_Jadwal, data){
    var url ="http://localhost:8081/api/j_ambilnilai/"+ID_Jadwal;
    return this.http.post(url, data);
  }

  hapusjadwalAmbilNilai(ID_Jadwal){ 
    var url = "http://localhost:8081/api/j_ambilnilai/"+ID_Jadwal;
    return this.http.delete(url);
  }

}
