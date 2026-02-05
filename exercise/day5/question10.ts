// Question 10

function findDifference(arr1: any[], arr2: any[]) {
    let result: any[] = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) result.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) result.push(arr2[i]);
    }
    
    return result;
}

console.log(findDifference([1,2,3,4,5],[3,4,5,6,7]));
