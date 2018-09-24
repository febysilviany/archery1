import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Nilai } from '../../models/datanilai';
import * as firebase from 'firebase';

@Injectable()
export class NilaiProvider {
  private datanilaiList: Nilai[]=[];

  constructor(public http: Http) {
    console.log('Hello NilaiProvider Provider');
  }

  loadNilai(){
    let Email = firebase.auth().currentUser.email;
    return this.http.get("http://localhost:8081/api/nilaiku/"+Email)
      .map((response: Response) => {
        let data = response.json();

        // let dataInJSON = JSON.parse(data);
        console.log(data);
        let newDataStructure = [];
        newDataStructure.push(JSON.parse(data[0].TotalRambahan1));
        newDataStructure.push(JSON.parse(data[0].TotalRambahan2));
        newDataStructure.push(JSON.parse(data[0].TotalRambahan3));
        newDataStructure.push(JSON.parse(data[0].TotalRambahan4));
        newDataStructure.push(JSON.parse(data[0].TotalRambahan5));
        newDataStructure.push(JSON.parse(data[0].TotalRambahan6));
        return newDataStructure;
      },
        (error) => console.log(error)
      );
  }

  loadDataNilai(){
    return this.http.get("http://localhost:8081/api/datanilai")
      .map((response: Response) => {
        let data = response.json();
        this.datanilaiList = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  tambahNilai(data){
    var url = "http://localhost:8081/api/nilai";
    return this.http.post(url, data);
  }

  getTanggal() {
    var email = firebase.auth().currentUser.email;
    var url = "http://localhost:8081/api/nilaiku/tanggal/"+email;
    return this.http.get(url);
  }


}
