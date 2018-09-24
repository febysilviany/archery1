import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Klub } from '../../models/dataklub';
import * as firebase from 'firebase';


@Injectable()
export class KlubProvider {
  private dataklubList: Klub[]=[];

  constructor(public http: Http) {
    console.log('Hello KlubProvider Provider');
  }

  loadDataKlub(){
    var email = firebase.auth().currentUser.email;
    return this.http.get("http://localhost:8081/api/dataklub/"+email)
      .map((response: Response) => {
        let data = response.json();
        this.dataklubList = data;
        return data;
        
      },
        (error) => console.log(error)
      );
  }


  editDataKlub(IDKlub, data){
    var url ="http://localhost:8081/api/klub/" + IDKlub;
    return this.http.post(url, data);
  }


  // hapusKlub(IDKlub){ 
  //   var url = "http://localhost:8081/api/klub/"+IDKlub;
  //   return this.http.delete(url);
  // }

  // tambahKlub(data){
  //   var url = "http://localhost:8081/api/klub";
  //   return this.http.post(url, data);
  // }

}
