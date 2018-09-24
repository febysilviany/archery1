export class Datadiri {
    constructor(
        public Status: string = "",
        public Nama: string = "",
        public Email: string = "",
        public Password: string = "",
        public Umur: number = 0,
        public TinggiBadan: number = 0,
        public JenisBusur: string = "",
        public PanjangBusur: number = 0,
        public KekuatanBusur: number = 0,
        public Gambar: string[]=[]) {

    }
}