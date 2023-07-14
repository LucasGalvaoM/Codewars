// P: array of integers, can have negatives and zeros, cannot be empty
// R: an array with all consecutives and equal numbers sum

// Pseudo Code:

    // create a result array
    // create a variable to keep track of the previous number in loop
    // iterate through array
    // if that variable is empty, assign the current value to it
    // if the current variable is different that that of the variable, push the sum the variable holds to the result array
    // if the current variable is equal to that of the variable, keep going
    // if it is the last iteration, push whatever sum is in the variable

function sumConsecutives(arr) {
    let res = [];
    let current = [];
    arr.forEach((num, i) => {
        if(!current.length || num === current[0]) {
            current.push(num);
            if(i === arr.length-1) res.push(current[0]*current.length);
        } else {
            res.push(current[0]*current.length);
            current = [];
            current.push(num);
            if(i === arr.length-1) res.push(current[0]);
        }
    })
    return res;
}

// Test Cases:

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1])) // [1,12,0,4,6,1]
console.log(sumConsecutives([1,1,7,7,3])) // [2,14,3] 
console.log(sumConsecutives([-5,-5,7,7,12,0])) // [-10,14,12,0]
console.log(sumConsecutives([3,3,3,3,1])) // [12, 1]