// Question 2

function question2 (arr: string[]) {
    let output: string = "";
    for (let i = 0; i < arr.length - 1; i++) {
        output = output.concat(arr[i],", ");
    }
    output = output.concat(" and ", arr[arr.length-1]);
    return output;
}

console.log(question2(["apple", "strings", "jokket", "sss"]));
