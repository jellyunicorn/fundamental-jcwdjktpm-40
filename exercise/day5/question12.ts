// Question 12

function sumDuplicateValues(arr: number[]) {
    let duplicates: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] === curr) {
                // makes sure first instance of duplicate value is also summed
                if (!duplicates.includes(arr[j])) {
                    duplicates.push(arr[j]);
                }
                duplicates.push(arr[j]);
                break;
            }
        }
        console.log(duplicates);
    }

    console.log(duplicates);
    let sum: number = duplicates.reduce((a,b) => {
        return a + b;
    })

    return sum;
}

console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10]));
