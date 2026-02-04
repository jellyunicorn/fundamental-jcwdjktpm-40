/* 
    ========= [If-Else Statement] =========

    if(condition) {
        code block
    } else if {
        code block
    }
    ...
    } else {
      code block  
    }

*/

const grade: string = "B";

if (grade === "A") {
  console.log("Bagus");
} else if (grade === "B") {
  console.log("Mayan");
} else if (grade === "C") {
  console.log("Buruk");
} else if (grade === "F") {
  console.log("ngga lulus");
} else {
  console.log("grade ngga diketahui");
}

/* 
  ========= [Switch-Case Statement] =========

  switch(value) {
    case "value1":
      // code here
      break;
    case "value2":
      // code here
      break;
    ...
    default:
      // code here
      break;
  }
*/

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("senin");
    break;
  case "selasa":
    console.log("selasa");
    break;
  default:
    console.log("ngga tau");
    break;
}

/* 
  ========= [Logical Operators] =========

  &&  -> AND
  ||  -> OR
  !   -> NOT

*/

// AND

let umur: number = 25;
let punyaSIM: boolean = true;

const umurLegal: number = 17;

if (umur >= umurLegal && punyaSIM) {
  console.log("boleh nyetir");
} else {
  console.log("ngga bole");
}

// OR
let jenisDaging: string = "ayam";

if (jenisDaging === "ayam" || jenisDaging === "ikan") {
  console.log("mau dong");
} else {
  console.log("koles tinggi njir");
}

// NOT
const good: boolean = true;
const bad: boolean = !good;

console.log(good);
console.log(bad);

/* 
  ========= [Ternary Operators] =========

  Shortcut untuk if-else
  Syntax: condition ? true : false

  Bisa untuk if-else-if... tapi susah dibaca, jadi standard
  practice gunakan ternary operator untuk if-else aja

*/

const letter: string = "a";

// cara panjang
if (letter === "a") {
  console.log("a");
} else {
  console.log("not a");
}

// cara pendek
console.log(letter === "a" ? "a" : "not a");

/* 
  ========= [Loops] =========

  for loop:
  - punya 3 statement
    - statement 1 -> inisialisasikan variable yang diloop
    - statement 2 -> define kondisi looping
    - statement 3 -> kode yang di eksekusi akhir setiap iterasi
  
  syntax for loop
  for (statement1; statement2; statement3) {
    code block
  }
  
  while loop:
  - execute while condition is met

  syntax while loop
  while(condition) {
    code block
  }

  do-while loop:

  syntax do-while loop
  - like while loop but executes at least once

  do {
     code block
  } while (condition)

*/

// nested for loop
for (let i = 0; i < 5; i++) {
  console.log("Loop ke-" + (i + 1));
  for (let j = 0; j < 3; j++) {
    console.log("hello");
  }
}

// decrementing for loop
for (let i = 10; i > 0; i--) {
  console.log("Loop " + i);
}

// while loop
let i: number = 1;

while (i < 10) {
  console.log(i);
  i++;
}

// do-while loop

let j: number = 1;

do {
  console.log(j);
  j++;
} while (j < 0);

/* 
  ========= [Break] =========

  menghentikan looping

*/

let sum: number = 0;
while (true) {
  console.log(sum);
  if (sum >= 5) break;
  sum++;
}

/* 
  ========= [Continue] =========

  skip 1 iterasi loop
*/

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

