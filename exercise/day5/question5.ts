// Question 5

function addElement(arr: number[], toAdd: number) {
    let result: number[] = arr;
    if (!arr.includes(toAdd)) {
        result.push(toAdd);
    }
    return result;
}

const arr: number[] = [1,2,3,4,5];

