// menghitung gaji karyawan
let nama = "mul";
let gaji_pokok = 3000000;
let tunj = 20/100 * gaji_pokok;
let pjk = 15/100 * gaji_pokok + tunj;
let gaji_bersih = gaji_pokok + tunj - pjk;

console.log (
`Nama karyawan ${nama}
Tunjangan ${tunj}
Pajak ${pjk}
Gaji bersih ${gaji_bersih}`
)

// mengkonverensi jam-menit-detik ke total detik
let jam = 1;
let menit = 30;
let detik = 40;

let hasil = jam * 3600 + menit * 60 + detik;
console.log (
    `hasil ${hasil}`
)

//mengkonverensi detik ke jam-menit-detik
let detiktotal = 5440;

let Jam = Math.floor (detiktotal / 3600) ;
let sisadetik = detiktotal % 3600;
let meniT = Math.floor (sisadetik / 60);
let detiK = sisadetik % 60;

console.log (` ${Jam} jam,${meniT}menit ${detiK}detik`)

//menghitung jeruk
let gram = 5000;
let harga = gram * 500;
let diskon = gram * 5/100 ;
let hasill = harga - diskon;

 console.log( `${harga} harga sebelum
            ${diskon} harga diskon
            ${hasil} harga setelah diskon
 `)

 //bilangan bulat
let bilangan = 190;

let satuan = bilangan % 10 ;
let puluhan = Math.floor ((bilangan % 100) / 10);
let ratusan = Math.floor ((bilangan / 100) % 10);

console.log(`${satuan} satuan ${puluhan} puluhan ${ratusan} ratusan `)

//let cuaca
let cuaca = 900;
let derajat = 5 / 9 * cuaca - 32 ;

if (derajat >300) {
    console.log("panas")
} else if (derajat <250 ) {
    console.log("dingin")
} else {
    console.log("normal")
}