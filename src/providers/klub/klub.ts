import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Klub } from '../../models/dataklub';

@Injectable()
export class KlubProvider {
  private dataKlub: Klub[]=[];

  constructor(public http: Http) {
    console.log('Hello KlubProvider Provider');
  }

  loadKlub(){
    return this.http.get("http://localhost:8081/api/klub")
      .map((response: Response) => {
        let data = response.json();
        this.dataKlub = data;
        return data;
      },
        (error) => console.log(error)
      );
  }

  tambahKlub(data){
    var url = "http://localhost:8081/api/klub";
    return this.http.post(url, data);
  }

  editKlub(ID_Klub, data){
    var url ="http://localhost:8081/api/klub/"+ID_Klub;
    return this.http.post(url, data);
  }

  hapusKlub(ID_Klub){ 
    var url = "http://localhost:8081/api/klub/"+ID_Klub;
    return this.http.delete(url);
  }

}
