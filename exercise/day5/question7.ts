// Question 7

function makeArrayOfNumbers(maxSize: number, ...elements: number[]) {
    elements.splice(maxSize, (elements.length - maxSize), );
    return elements;
}

const arr: number[] = makeArrayOfNumbers(5, 5, 10, 24, 3, 6, 7, 8);
console.log(arr);
