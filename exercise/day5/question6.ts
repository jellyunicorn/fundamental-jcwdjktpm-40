// Question 6

function addNums(arr: any[]) {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}

const arr = ["2", "string", 3, 1, true, 2];
console.log(addNums(arr));
