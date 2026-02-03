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
*/