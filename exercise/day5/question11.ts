// Question 11

function getPrimitives(arr: any[]) {
    let result: any[] = [];

    function isPrimitive(val: any) {
        if (val === null) return true;
        else if (typeof val === "object" || typeof val === "function") return false;
        else return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (isPrimitive(arr[i])) result.push(arr[i]);
    }

    return result;
}

let arr: any[] = [1, [], undefined, {}, "string", {}, []];

console.log(getPrimitives(arr));
