/*
    ========= [Object Oriented Programming] =========
*/

// cara penulisan object

const obj1 = {}; // cara 1

const obj2 = new Object(); // cara 2

interface User {
    email: string;
    name: string;
    job: string;
    address: Address;
    hobby: string[];
    makan: () => void; // pake void kalo ga return apa2
}

interface Address {
    street: string;
    city: string;
    postalCode: string;
}

const user: User = {
    name: "joko",
    email: "a@gmail.com",
    job: "jobless",
    address: {
        street: "Jl. Sudirman",
        city: "tangerang",
        postalCode: "12345",
    },
    hobby: ["gaming", "gaming"],
    makan() {
        console.log("makan");
    }
};

/*
    ============ [Add Property] ============
*/

const person: any = {
    name: "budi",
    age: 40,
}

person.hobby = "ngoding";
person["address"] = "Semarang";

console.log(person);

// !! ngga bisa add property kalo udah pake interface/class !!

/*
    ============ [Delete Property] ============
*/

delete person.name;
console.log(person);

/*
    ============ [Immutable & Mutable] ============

    immutable:  ga bisa diubah setelah dibuat
                primitive data types => immutable

    mutable:    tipe data yang bisa diubah setelah dibuat
                non-primitive data types => mutable

*/

// immutable
let num1: number = 1;
let num2: number = num1;

num2 = 2;

console.log(num1);
console.log(num2);

// mutable
const orang1: any = { name: "john" };
const orang2: any = orang1;

console.log(orang1);
console.log(orang2);

orang2.age = 20;

// orang1 keubah walaupun cuma nambah age ke orang2
console.log(orang1); 
console.log(orang2);

// shallow copy
const orang3: any = {...orang1};

orang1.age = 10;

console.log(orang1);
console.log(orang3);

// shallow copy cuman copy "luarnya" object
// i.e. inner objects ga di copy

const product1 = {
    name: "meja",
    variant: ["a", "b", "c"],
    obj: {
        test1: "df",
        test2: "edj",
    }
}
const product2 = {...product1}; // shallow copy
const product3 = structuredClone(product1);

product2.obj.test1 = "213";

// obj.test1 masih keubah utk product1
// karena product2 adalah shallow copy
console.log(product1);
console.log(product2);
console.log(product3);

/*
    ============ [Optional Chaining] ============
*/

const emptyObj: any = {}

// masih bisa ambil data walaupun belum ada isi
console.log(emptyObj.address);
// console.log(emptyObj.address.street); // crash
console.log(emptyObj.address?.street); // optional chaining

/* 
    ============ [For In] ============

    loop thru keys in objects
*/

const person2: any = {
    name: "siti",
    age: 20,
}

for (const key in person2) {
    console.log(key);
    console.log(person2[key]);
    console.log(person2.key);
}

/*
    ============ [Destructuring Assignment] ============

    mengeluarkan property dalam object/array menjadi variable
*/

// destructuring object
const animal = {
    name: "joe",
    age: 2,
};

console.log(animal.name);
console.log(animal.age);

const {name, age} = animal;

console.log(name);
console.log(age);

// destructuring array
const arr = [1,2];

const[a, b] = arr;

console.log(a);
console.log(b);

/*
    ============ [Spread Operator] ============
    digunakan untuk copy isi / menggabungkan object
*/

const obj3 = { name: a, password: "123"};
const obj4 = { email: "a@gmail.gom" };

const result = { ...obj3, ...obj4 };

console.log(result);

/*
    ============ [This Keyword] ============

    mengakses property lain di dalam object
*/

const person3 = {
    firstName: "a",
    lastName: "b",
    hello() {
        console.log(`hello, ${this.firstName} ${this.lastName}`);
    }
}

person3.hello();

/* 
    ============ [Classes] ============

    object template
*/

// class declaration
class Person {
    greet() {
        console.log("Hello");
    }
}

// class expression
const Person2 = class {
    greet() {
        console.log("Hello");
    }
}

/*
    ============ [Constructor] ============
*/

class Vehicle {
    #brand: string;
    #model: string;
    #year: number;
    #chassisNumber: string; // private

    constructor(brand: string, model: string, year: number) {
        this.#brand = brand;
        this.#model = model;
        this.#year = year;
        this.#chassisNumber = "123-123-123";
    }

    toString() {
        return `${this.#brand} ${this.#model} ${this.#year}`;
    }

    getBrand() {
        return this.#brand;
    }

    getModel() {
        return this.#model;
    }

    getYear() {
        return this.#year;
    }

    setBrand(brand: string) {
        this.#brand = brand;
    }

    setModel(model: string) {
        this.#model = model;
    }

    setYear(year: number) {
        this.#year = year;
    }
}

const mobil = new Vehicle("Toyota", "Avanza", 2004);
console.log(mobil.toString());

/*
    ============ [Class Inheritance] ============
*/

class Car extends Vehicle {
    #seatCount: number;

    constructor(brand: string, model: string, year: number, seatCount: number) {
        super(brand, model, year);
        this.#seatCount = seatCount;
    }

    getSeatCount() {
        return this.#seatCount;
    }

    setSeatCount(seatCount) {
        this.#seatCount = seatCount;
    }
}