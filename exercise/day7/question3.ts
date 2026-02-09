function pascal(numRows: number) {
    let result: number[][] = [];

    // base case
    result[0] = [1];
    if (numRows === 1) return result;
    result[1] = [1,1];
    if (numRows === 2) return result;

    for (let row = 2; row < numRows; row++) {
        // first number in row is 1
        result[row] = [1];
        // elements in between first and last is the sum of the two numbers directly above
        for (let col = 1; col < row; col++) {
            result[row][col] = result[row-1][col] + result [row-1][col-1];
        }
        // last number in row is 1
        result[row].push(1);
    }

    return result;
}

console.log(pascal(6));
