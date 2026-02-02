console.log("apa kentut??\n");

// komen

/* 
    komen
    multiple 
    li
    ne
*/

/*  
    ====== [Variables] ======

    storage/penampungan data
    syntax: var, let, const
*/

// var person = "Budi Sutrianto";
// console.log(person);

let person2 = "Alexis Budiman";
console.log("person2 sebelum reassign: ", person2);

const person3 = "Siti Haryanto";
console.log(person3);

/* 
    var udah jarang digunakan:
    let & const block-scoped, artinya
    ga bisa redeclare variable nama sama
*/

// let bisa reassign variable
person2 = "Jonathan Banks";

// const ga bisa. bakal display error
// person3 = "Jonathan Banks";

console.log("person2 setelah reassign: ", person2);

/* 
    ====== [Variable Naming] ======
    
    only letters, digits, or symbols $ and _
    no digits for first character
    case sensitive
*/

const companyName = "Purwadhika"; // camel case (best practice)
const CompanyName = "Purwadhika"; // pascal case
const company_name = "Purwadhika"; // snake case

/* 
    ====== [Data Types] ======

    primitive: string, number, boolean, null, undefined
    non-primitive: object, array

    string -> '', "", ``k
    number -> 41, 67
    boolean -> true, false
    null -> menandakan value kosong
    undefined -> js ngga tau isiny
*/

// quokka: ctrl + k + q

console.log(typeof null);