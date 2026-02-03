/*
    ========= [Arrays] =========
*/

// 2 cara declare array
const arr = [];
const arr2 = new Array(); // ampir gapernah dipake

const arrayOfString: string[] = ["a", "b", "c"];
const arrayStringNumber: (string | number)[] = ["a","b","c", 10]

/*
    ========= [Object] =========
*/

interface Orang {
    name: string;
    nik: number;
}

interface Siswa extends Orang {
    hobby: string;
}

const objectOrang: Orang = {
    name: "alex",
    nik: 120120120120
};

const objectStudent: Siswa = {
    name: "budi",
    nik: 929292929292,
    hobby: "viboe game"
};

/*
    =========[Array of Objects]=========
*/

const gengs: Orang[] = [
    {name:"budi", nik: 67},
    {name:"anto", nik: 68},
    {name:"haryanto", nik: 69},
    {name:"suharto", nik: 70},
    {name:"sukarno", nik: 71}
];

console.log(gengs[3].name + " " + gengs[0].nik);

/*
    ========= [For-Of Loop] =========

    Loop thru entire array
*/

for(const orang of gengs) {
    console.log(orang);
}

// sama aja dengan
for (let i = 0; i < gengs.length; i++) {
    console.log(gengs[i]);
}

/*
    ========= [Functions] =========

    Subprogram/reusable block of code

    Syntax:

    1. function declaration

    function namaFunc(param) {
        // logic
    }

    2. function expression

    const namaFunc = function (param) {
        // logic
    }

    !!!Function expression ngga bisa hoisting!!!
    Hoisting adalah, function declaration selalu
    dipindah keatas jadi dieksekusi duluan
*/

function square(i: number) {
    return i ** 2;
}

console.log(square(5));

/* 
    ========= [Function Scope] =========

    Variable dlm function cuman bisa diakses dalam function tsb
*/

/*
    ========= [Parameter & Argument] =========

    parameter   -> variable yang mewakili value dari argument yg dimasukkan
    argument    -> value yang dimasukkan saat pemanggilan function

    function namaFunc(PARAMETERS) {
    
    }

    namaFunc(ARGUMENTS);
*/

function greeting(name: string, company?: string) {
    // code
}

greeting("joko"); // parameter company optional, ngga perlu arg

/*
    ========= [Default Parameter] =========
*/

function multiply(a: number, b: number = 10) { // b has default paramater 10
    console.log(a);
    console.log(b);
    return a*b;
}

console.log(multiply(2))

/*
    ========= [Rest Parameter] =========

    mewakili sisa argument ke dalam satu parameter
*/

function restyFunc(a: number, b: number, ...c: number[]) {
    console.log(a);
    console.log(b);
    console.log(c);
}

restyFunc(1, 2, 3, 4, 5, 6)

/*
    ========= [Nested Functions] =========

    fungsi dalam fungsi
    inner function  -> bisa akses param dari outer function
    outer function  -> ga bisa akses param dari inner function
*/

function getMessage(firstName: string) {

    function sayHello() {
        return "Hello " + firstName + ", ";
    }

    function welcome() {
        return "welcome to Purwhadika";
    }

    return sayHello() + welcome();

}

console.log(getMessage("Budi"));

/*
    ========= [Recursive Function] =========

    fungsi yang memanggil diri sendiri
*/

function recursiveFibo(numFibo: number) {
    if (numFibo <= 2) {
        return 1;
    } else {
        return recursiveFibo(numFibo - 1) + recursiveFibo(numFibo - 2);
    }
}

console.log(recursiveFibo(15));

/*
    ========= [Arrow] =========

    shortcut nulis function expression
*/

const square2 = (angka: number) => {
    return angka * angka;
}

// bisa disingkat kalo 1 line

const square3 = (angka: number) => angka * angka;

/*
    ========= [Array Built-in Methods] =========

    join(x)     ->  menggabungkan value dalam array ke bentuk string
                    parameter: x-separated values (default: comma)
    pop()       ->  hilangkan value terakhir
    shift()     ->  hilangkan value pertama (index 0)
    unshift()   ->  tambah value ke depan
    push()      ->  tambah value ke akhir
    splice()    ->  hapus, mengganti, atau menambah value pada array
                    syntax: splice(startIndex, brpYgMauDiDelete, item)
    sort()      ->  sorts array (string A-Z, number dari first digit doang)
    reverse()   ->  reverse sort array
*/

// join
const words: string[] = ["hello", "world"];
console.log(words.join())

// pop
const words2: string[] = ["hello", "world"];
words2.pop();
console.log(words2);

// shift
const words3: string[] = ["hello", "world"];
words3.shift();
console.log(words3.shift());

// unshift
const words4: string[] = ["hello", "world"];
words4.unshift("a");
console.log(words4);

// push
const words5: string[] = ["hello", "world"];
words5.push("a");
console.log(words5);

// splice
const months: string[] = ["jan", "mar", "apr", "dec"];

// nambah data
months.splice(1, 0, "feb");
console.log(months);


// hapus data (2 items dari index 2)
months.splice(2, 2, );
console.log(months);

// ganti data
months.splice(1, 1, "mei");
console.log(months);

// sort & reverse

// buat string
const letters: string[] = ["b", "d", "a", "c"];
letters.sort();
console.log(letters);
console.log(letters.reverse());

// buat numbers
const nums: number[] = [10, 67, 29, 1, 41, 9]
console.log(nums.sort()); // cuman ngitung digit depan
console.log(nums.sort((a, b) => a - b)); // ascending
console.log(nums.sort((a, b) => b - a)); // descending
