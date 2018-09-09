import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Nilai } from '../../models/datanilai';


@Injectable()
export class NilaiProvider {
  private datanilaiList: Nilai[]=[];

  constructor(public http: Http) {
    console.log('Hello NilaiProvider Provider');
  }

  loadNilai(){
    return this.http.get("http://localhost:8081/api/nilai")
      .map((response: Response) => {
        let data = response.json();
        for (let elem of data){
          elem.TotalRambahan1 = elem.TotalRambahan1.split(",");
          elem.TotalRambahan2 = elem.TotalRambahan2.split(",");
          elem.TotalRambahan3 = elem.TotalRambahan3.split(",");
          elem.TotalRambahan4 = elem.TotalRambahan4.split(",");
          elem.TotalRambahan5 = elem.TotalRambahan5.split(",");
          elem.TotalRambahan6 = elem.TotalRambahan6.split(",");
        }
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


}
