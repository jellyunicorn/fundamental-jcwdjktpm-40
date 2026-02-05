// Question 1

function noSort(arr: number[]) {
    let max: number = arr[0];
    let min: number = arr[0];
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
        sum += arr[i];
    }

    const mean: number = sum / arr.length;
    console.log("Max: " + max + "\nMin: " + min + "\nMean: "+ mean);
}

noSort([1, 2, 3, 4, 5, 500]);

function withSort(arr: number[]) {
    
    // find max/min
    const sortedArr = arr.sort((a, b) => a - b); // ascending
    console.log(sortedArr);
    const min: number = arr[0];
    const max: number = arr[arr.length - 1];

    // find mean
    let sum: number = 0;
    for(let i = 0; i < arr.length; i++) sum += arr[i];
    const mean: number = sum / arr.length;

    console.log("Max: " + max + "\nMin: " + min + "\nMean: "+ mean);
}

withSort([3,2,1,500,90])
