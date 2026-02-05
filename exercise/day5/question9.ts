// Question 9

function findDuplicateValues(arr: any[]) {
    let result: any[] = [];

    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] === curr) {
                result.push(arr[j]);
                break;
            }
        }
    }

    return result;
}

console.log(findDuplicateValues([1,2,2,3,3,3,4,5,5,"a","a","b"]));
