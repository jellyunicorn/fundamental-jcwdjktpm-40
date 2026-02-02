// Question 1
let num: number = 10;
const isEven: boolean = num % 2 === 0;

if (isEven) console.log("Nomor genep");
else console.log("Nomor ganjil");

// Question 2
let num2: number = 7;

let isPrime: boolean = true;
for (let i = 2; i < num2; i++) {
    if (num2 % i == 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);

// Question 3
let num3: number = 5;

let sum: number = 0;
for(let i = 1; i <= num3; i++) {
    sum = sum + i;
}

console.log(sum);

// Question 4
let num4: number = 5;

let factorial: number = 1;
for(let i = 2; i <= num4; i++) {
    factorial = factorial * i;
}

console.log(factorial);

// Question 5
let nthFibo: number = 15;
let first: number = 0;
let second: number = 1;

if (nthFibo === 1) {
    console.log(first);
}
else if (nthFibo === 2) {
    console.log(second);
}
else {
    let fibo: number;
    for (let i = 2; i <= nthFibo; i++) {
        fibo = first + second;
        first = second;
        second = fibo;
    }
    console.log(fibo);
}