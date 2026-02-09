function majority(nums: number[]) {
    let occurences = {};
    for (const num of nums) {
        if(!occurences[num]) {
            occurences[num] = 0;
        }
        occurences[num]++;
    }
    for (const key in occurences) {
        if (occurences[key] >= nums.length / 2) {            
            return key;
        }
    }
} 

// console.log(majority([5,5,5,6,2,3,4,5]));
