function groupThePeople(groupSizes: number[]): number[][] {
    let possibleGroupSizes: number[] = [];
    let buckets: number[][] = [];
    
    // initializing buckets
    for (let i = 0; i < groupSizes.length; i++) {
        possibleGroupSizes.push(i);
        buckets.push([]);
    }

    console.log(possibleGroupSizes);
    console.log(buckets);
    
    

    // split into buckets
    for (let i = 0; i < groupSizes.length; i++) {
        console.log(i);
        console.log(groupSizes[i])
        
        for (const groupSize of possibleGroupSizes) {
            console.log(groupSize);
            console.log(i);
            
            if (groupSizes[i] === possibleGroupSizes[groupSize]) {
                console.log(possibleGroupSizes[i]);
                
                console.log(groupSizes[i]);
                console.log(groupSize);
                
                
                buckets[groupSize].push(i);
            }
        }
    }

    console.log(buckets);
    

    return buckets;
};

const nums = [3,3,3,1,3,3,3];
groupThePeople(nums);