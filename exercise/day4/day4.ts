// Question 1

function arrayTriangle(height: number) {
    let arr: number[] = [];
    let sum: number = 1;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j <= i; j++) {
            arr.push(sum);
            sum++;
        }
        console.log(arr);
        arr = [];
    }

    return;
}

arrayTriangle(5)

// Question 2

function fizzBuzz(len: number) {
    const arr: (number | string)[] = [];

    for (let i = 1; i <= len; i++) {
        const DIVISIBLE_BY_THREE: boolean = i % 3 === 0;
        const DIVISIBLE_BY_FIVE: boolean = i % 5 === 0;

        if (DIVISIBLE_BY_THREE && DIVISIBLE_BY_FIVE) {
            arr.push("FizzBuzz");
        } else if (DIVISIBLE_BY_THREE) {
            arr.push("Fizz");
        } else if (DIVISIBLE_BY_FIVE) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }

    console.log(arr);
    
    return arr;
}

// Question 3

function calculateBMI(weight: number, height: number) {
    const bmi: number = weight / (height ** 2);

    const BMI_UNDERWEIGHT: number = 18.5;
    const BMI_NORMAL: number = 24.9;
    const BMI_OVERWEIGHT: number = 29.9;
    const BMI_VERY_OVERWEIGHT: number = 39.9;

    if (bmi < BMI_UNDERWEIGHT) {
        return "Underweight";
    } else if (bmi <= BMI_NORMAL) {
        return "Normal";
    } else if (bmi <= BMI_OVERWEIGHT) {
        return "Overweight";
    } else if (bmi <= BMI_VERY_OVERWEIGHT) {
        return "Very Overweight";
    } else if (bmi > BMI_VERY_OVERWEIGHT) {
        return "Obese";
    } else {
        return "Unknown"
    }
}

// Question 4

function removeOdds(nums: number[]) {

    // pake filter
    return nums.filter((num) => num % 2 === 0)

    // pake splice
    /* for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            nums.splice(i, 1, );
        }
    } */

    return nums;
}

console.log(removeOdds([2,4,5,6,9,2,2,3,1,0]))

// Question 5

function splitString(str: string) {
    const arr: string[] = [];
    let word: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            // prevent multiple spaces from becoming words
            if (word != "") arr.push(word);
            word = "";
        } else {
            word += str.charAt(i);
        }
    }

    return arr;
}

console.log(splitString(" Hello  World !!!   d-fc#   !      "));