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

arrayTriangle(4)

// Question 2

function fizzBuzz(len: number) {
    const arr: (number | string)[] = [];

    for (let i = 1; i <= len; i++) {
        const divisibleByThree: boolean = i % 3 === 0;
        const divisibleByFive: boolean = i % 5 === 0;

        if (divisibleByThree && divisibleByFive) {
            arr.push("FizzBuzz");
        } else if (divisibleByThree) {
            arr.push("Fizz");
        } else if (divisibleByFive) {
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
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 1) {
            nums.splice(i, 1, );
        }
    }

    return nums;
}

// Question 5

// pake array built-in method
function splitString(str: string) {
    return str.split(" ");
}

// manual (pake string built-in method)
function splitStringManual(str: string) {
    const arr: string[] = [];
    let word: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            if (str.charAt(i-1) != " ") arr.push(word);
            word = "";
        } else if(i == str.length-1) {
            word += str.charAt(i)
            arr.push(word);
            break;
        } else {
            word += str.charAt(i);
        }
    }

    return arr;
}

console.log(splitStringManual("Hello World !!!         !"));
