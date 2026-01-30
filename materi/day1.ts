// type safety
let message: string = "hi";

/* 
    ====== [String Built-in Methods] ======
*/

let name: string = "Sudirman Uu";
console.log(name.toLowerCase()); // convert lowercase
console.log(name.toUpperCase()); // convert uppercase

// replace first instance of left to right
console.log(name.replace("u","oe"));

// replace all left to right
console.log(name.replaceAll("u","oe"));

// kombinasi
console.log(name.toLowerCase().replaceAll("u","oe"));

// split into array
console.log(name.split(""));

// split into array (space separated)
console.log(name.split(" "));

// concatenate strings
console.log(name.concat(" ").concat(message));
console.log(name + " " + message);

// slice first 3 chars
console.log(name.slice(3));

// slice from 2nd char to 4th inclusive
console.log(name.slice(1,4));

/* 
    ====== [Template Literals/Template String] ======
*/

let welcome: string = "Hello";
let nama: string = "Sudirman";

// these are the same
console.log(welcome + " " + nama);
console.log(`${welcome} ${nama}`);

/* 
    ====== [Number Built-In Methods] ======
*/

const angka: string = "4000";

// convert string ke number
console.log(Number(angka));
console.log(parseInt(angka));

/* 
    ====== [Data Type Conversions] ======
*/

const angka2: number = 67;

// convert num to string
console.log(String(angka2));
console.log(angka2.toString());

// convert data types to boo
console.log(Boolean(1));
console.log(Boolean(10000));
console.log(Boolean(-10000));
console.log(Boolean(-10000.21));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(" "));

/* 
    ====== [Date & Time] ======
*/

const nowDate: Date = new Date();

// tanggal & waktu UTC
console.log(nowDate);

// display tahun
console.log(nowDate.getFullYear());

// display bulan. +1 soalny mulai dr 0
console.log(nowDate.getMonth() + 1)

// display hari
console.log(nowDate.getDate());

// ganti D/M/Y
nowDate.setDate(24);
nowDate.setMonth(4);
nowDate.setFullYear(2001);

console.log(nowDate);

/*
    ====== [Basic Operators] ======

    + -> tambah
    - -> kurang
    * -> kali
    / -> bagi
    % -> modulo
    ** -> pangkat
*/

console.log(5 % 3)

let n: number = 9;

// s.d n = n + 10
n += 10;

console.log(n)

// increment by 1
n++;

// decrement by 1
n--;

/* 
    ====== [Prefix & Postfix] ======
*/

let counter2: number = 2;

console.log(counter2++); // postfix : print -> tambah
console.log(++counter2); // prefix  : tambah -> print

/* 
    ====== [Comparison Operators] ======

    ==  -> sama dengan (cek value doank)
    === -> sama dengan (cek value & tipe data)
    !=  -> tidak sama dengan (cek value doank)
    !== -> tidak sama dengan (cek value & tipe data)
    <   -> kurang dari
    >   -> lebih dari
    <=  -> kurang dari/sama dengan
    >=  -> lebih dari/sama dengan
*/

/* 
    ====== [MATH Functions] ======

    Syntax: Math.function()

    ceil(num)           -> bulat angka ke atas
    floor(num)          -> bulat angka ke bawah
    round(num)          -> bulat angka ke bilangan terdekat
    abs(num)            -> absolute value
    max(num1, num2..)   -> maksimum dari kumpulan angka
    min(num1, num2..)   -> minimum dari kumpulan angka
    random()            -> angka acak dari 0-1
*/

//angka random dari minimum sampe maximum
let minimum: number = 5;
let maximum: number = 67;
const range: number = maximum - minimum + 1;
const rn: number = Math.floor(Math.random() * range + minimum);
console.log(rn);