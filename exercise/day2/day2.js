const prompt = require('prompt-sync')();

let destinasi = prompt('Masukkan destinasi anda: ');
let jarak = prompt('Masukkan jarak ke destinasi (km): ');
let kecepatan = prompt('Masukkan kecepatan (km/h): ');

const waktu = jarak / kecepatan;

console.log("Waktu perjalanan yang akan kamu tempuh ke destinasi " +
    destinasi + " adalah " + waktu + " jam"
);