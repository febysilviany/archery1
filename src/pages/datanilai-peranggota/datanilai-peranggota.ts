import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nilai } from '../../models/datanilai';
import { NilaiProvider } from '../../providers/nilai/nilai';



@Component({
  selector: 'page-datanilai-peranggota',
  templateUrl: 'datanilai-peranggota.html',
})
export class DatanilaiPeranggotaPage {
  private datanilaiList: Nilai[]=[];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nilaiProvider:NilaiProvider
  ) {
  }

  ngOnInit(){
    this.loadNilai();
  }

  loadNilai(){
    this.datanilaiList =[];
    this.nilaiProvider.loadNilai()
      .subscribe((result)=>{
        console.log(result);
        this.datanilaiList=result;
      });
    console.log(this.datanilaiList);
  }
  
  public lineChartData : Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Latihan Pertama'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Latihan Kedua'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Latihan Ketiga'},
    {data: [81, 70, 60, 50, 90, 40, 70], label: 'Pengambilan Nilai'}
  ];
  public lineChartLabels:Array<any> = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { //MERAH
      backgroundColor: 'rgba(158, 0, 28, 0.4)',
      borderColor: '#9E001C',
      pointBackgroundColor: '#55000F',
      pointBorderColor: '#55000F',
      pointHoverBackgroundColor: '#9E001C',
      pointHoverBorderColor: '#9E001C'
    },
    { //ORANGE
      backgroundColor: 'rgba(219, 71, 0, 0.4)',
      borderColor: '#DB4700',
      pointBackgroundColor: '#C41700',
      pointBorderColor: '#C41700',
      pointHoverBackgroundColor: '#DB4700',
      pointHoverBorderColor: '#DB4700'
    },
    { //HIJAU
      backgroundColor: 'rgba(0, 140, 61, 0.3)',
      borderColor: '#008C3D',
      pointBackgroundColor: '#00341F',
      pointBorderColor: '#00341F',
      pointHoverBackgroundColor: '#008C3D',
      pointHoverBorderColor: '008C3D'
    },
    { //BIRU MUDA
      backgroundColor: 'rgba(1, 160, 220,0.3)',
      borderColor: '#019FDC',
      pointBackgroundColor: '#01487E',
      pointBorderColor: '#01487E',
      pointHoverBackgroundColor: '#019FDC',
      pointHoverBorderColor: '#019FDC'
    }
    // { //BIRU TUA
    //   backgroundColor: 'rgba(6, 68, 143, 0.4)',
    //   borderColor: '#06448F',
    //   pointBackgroundColor: '#082795',
    //   pointBorderColor: '#082795',
    //   pointHoverBackgroundColor: '#06448F',
    //   pointHoverBorderColor: '#06448F'
    // }


  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

}
