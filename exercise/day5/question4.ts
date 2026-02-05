// Question 4

function addEachIndex(arr1: number[], arr2: number[]) {
    return arr1.map((nums, index) => {
        return nums + arr2[index];
    });
}

console.log(addEachIndex([1,2,3],[3,2,1]));
