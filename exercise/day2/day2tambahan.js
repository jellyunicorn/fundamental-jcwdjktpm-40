const prompt = require('prompt-sync')();

let namaItem = prompt('Masukkan nama item: ');
let harga = Number(prompt('Masukkan harga item: '));
let isMember = Number(prompt('Apakah anda member? 1 kalau member, 0 kalau tidak: '));

const taxRate = 0.3;
const discountRate = 0.15;
const taxAmount = harga * taxRate;
const discountAmount = harga * (discountRate * isMember);

const hargaFinal = harga + taxAmount - discountAmount;

console.log("RECEIPT" +
    "\nItem: " + namaItem +
    "\nBase price: " + harga +
    "\nTax: " + taxAmount +
    "\nDiscount: " + discountAmount +
    "\n\nTotal: " + hargaFinal
);

if (isMember == 1) {
    console.log("Member discount applied!");
}
else if (isMember == 0) {
    console.log("Gabung jadi member kita!");
};