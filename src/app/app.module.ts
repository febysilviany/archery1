import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service' ;
// import { NgxErrorsModule } from '@ultimate/ngxerrors';

import { HttpModule } from '@angular/http';

import { DatePicker } from '@ionic-native/date-picker';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChartsModule } from 'ng2-charts';

//Tabs
import { TabsanggotaPage } from '../pages/tabsanggota/tabsanggota';
import { TabsketuaPage } from '../pages/tabsketua/tabsketua';
import { TabspelatihPage } from '../pages/tabspelatih/tabspelatih';


//Pages (Ketua Klub)
import { LoginPage } from '../pages/login/login';
import { DaftarketuaPage } from '../pages/daftarketua/daftarketua';
import { BerandaketuaPage } from '../pages/berandaketua/berandaketua';
import { DatajadwalketuaPage } from '../pages/datajadwalketua/datajadwalketua';
import { DatadiriketuaPage } from '../pages/datadiriketua/datadiriketua';
import { DatanilaiPage } from '../pages/datanilai/datanilai';
import { DataklubPage } from '../pages/dataklub/dataklub';
import { TambahanggotaPage } from '../pages/tambahanggota/tambahanggota';
import { TambahjadwalLatihanPage } from '../pages/tambahjadwal-latihan/tambahjadwal-latihan';
import { EditjadwalLatihanPage } from '../pages/editjadwal-latihan/editjadwal-latihan';


//Providers
import { JadwalProvider } from '../providers/jadwal/jadwal';
import { PenggunaProvider } from '../providers/pengguna/pengguna';
import { KlubProvider } from '../providers/klub/klub';
import { EditdatadiriPage } from '../pages/editdatadiri/editdatadiri';
import { BerandapelatihPage } from '../pages/berandapelatih/berandapelatih';
import { DatajadwalpelatihPage } from '../pages/datajadwalpelatih/datajadwalpelatih';
import { TambahjadwalAmbilnilaiPage } from '../pages/tambahjadwal-ambilnilai/tambahjadwal-ambilnilai';
import { EditjadwalAmbilnilaiPage } from '../pages/editjadwal-ambilnilai/editjadwal-ambilnilai';
import { BerandaAnggotaPage } from '../pages/beranda-anggota/beranda-anggota';
import { DatajadwalAnggotaPage } from '../pages/datajadwal-anggota/datajadwal-anggota';
import { DatanilaiPeranggotaPage } from '../pages/datanilai-peranggota/datanilai-peranggota';
import { TambahNilaiPage } from '../pages/tambah-nilai/tambah-nilai';
import { OptionprofilPage } from '../pages/optionprofil/optionprofil';
import { NilaiProvider } from '../providers/nilai/nilai';
import { CekStatusPage } from '../pages/cek-status/cek-status';
import { UbahPasswordPage } from '../pages/ubah-password/ubah-password';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    DaftarketuaPage,
    TabsanggotaPage,
    TabsketuaPage,
    TabspelatihPage,
    BerandaketuaPage,
    DatajadwalketuaPage,
    DatadiriketuaPage,
    DatanilaiPage,
    DataklubPage, 
    TambahanggotaPage,
    TambahjadwalLatihanPage,
    EditjadwalLatihanPage,
    EditdatadiriPage,
    BerandapelatihPage,
    DatajadwalpelatihPage,
    TambahjadwalAmbilnilaiPage,
    EditjadwalAmbilnilaiPage,
    BerandaAnggotaPage,
    DatajadwalAnggotaPage,
    DatanilaiPeranggotaPage,
    TambahNilaiPage,
    DatanilaiPeranggotaPage,
    OptionprofilPage,
    CekStatusPage,
    UbahPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // NgxErrorsModule,
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    DaftarketuaPage,
    TabsanggotaPage,
    TabsketuaPage,
    TabspelatihPage,
    BerandaketuaPage,
    DatajadwalketuaPage,
    DatadiriketuaPage,
    DatanilaiPage,
    DataklubPage,
    TambahanggotaPage,
    TambahjadwalLatihanPage,
    EditjadwalLatihanPage,
    EditdatadiriPage,
    BerandapelatihPage,
    DatajadwalpelatihPage,
    TambahjadwalAmbilnilaiPage,
    EditjadwalAmbilnilaiPage,
    BerandaAnggotaPage,
    DatajadwalAnggotaPage,
    DatanilaiPeranggotaPage,
    TambahNilaiPage,
    DatanilaiPeranggotaPage,
    OptionprofilPage,
    CekStatusPage,
    UbahPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    PenggunaProvider,
    KlubProvider,
    DatePicker,
    JadwalProvider,
    NilaiProvider
    
  ]
})
export class AppModule {}
