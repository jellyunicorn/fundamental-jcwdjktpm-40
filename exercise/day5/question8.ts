// Question 8

// dengan built-in method concat()
function combineArrays(arr1: any[], arr2: any[]) {
    return arr1.concat(arr2);
}

console.log(combineArrays([1,2,3],[4,5,6,7]));

// tanpa concat()
function combineArraysManual(arr1: any[], arr2: any[]) {
    let result: any[] = [];

    for(let i = 0; i < arr1.length; i++) result.push(arr1[i]);
    for(let i = 0; i < arr2.length; i++) result.push(arr2[i]);

    return result;
}

console.log(combineArraysManual([1,2,3],[4,5,6,"pp"]));
