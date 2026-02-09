function maxProfit(ppd: number[]) {
    let max: number = 0;

    // iterate over each day  
    for (let i = 0; i < ppd.length - 1; i++) {
        // for each day find max profit by iterating over every day after  
        for (let j = i + 1; j < ppd. length; j++) {   
            let profit: number = ppd[j] - ppd[i];
            if (profit > max) max = profit; 
        }
    }

    return max;
}

console.log(maxProfit([7,1,5,3,6,4]));