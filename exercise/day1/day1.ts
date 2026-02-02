// Question 1: Area of rectangle

let length: number = 6;
let width: number = 3;
const area: number = length * width;

console.log(area);

// Question 2: Perimeter of rectangle

const perimeter: number = 2 * length + 2 * width;

console.log(perimeter);

// Question 3: Diameter, circumference, area of circle

let radius: number = 5;
const diameter: number = radius * 2;
const circum: number = diameter * Math.PI;
const areaCircle: number = (radius ** 2) * Math.PI;

console.log(areaCircle);

// Question 4: Find third angle of triangle

let angle1: number = 60;
let angle2: number = 55;

const angle3: number = 180 - angle1 - angle2;

console.log(angle3);

// Question 5: Convert days into D/M/Y

let daysTotal: number = 400;
const years: number = Math.floor(daysTotal / 365);
const months: number = Math.floor(daysTotal % 365 / 30);
const days: number = daysTotal % 365 % 30;

console.log(`${days} days ${months} months ${years} years`)

// Question 6: Difference of 2 dates in days

let date1: Date = new Date(2026, 0, 2);
let date2: Date = new Date(2025, 11, 24);

console.log(date1);
console.log(date2);

let diff: number = Math.abs(date1.getTime() - date2.getTime());
diff = diff / (1000 * 60 * 60 * 24); // convert ms to day

console.log(diff);