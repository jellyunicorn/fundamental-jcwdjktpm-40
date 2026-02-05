// Question 3

function secondSmallest(arr: number[]) {
    let smallest: number = arr[0];
    let secondSmallest: number = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
    }

    return secondSmallest;
}

const arr: number[] = [3,2,1,3,0,-1,-5];
console.log(secondSmallest(arr));


