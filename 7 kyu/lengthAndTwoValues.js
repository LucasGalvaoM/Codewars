// P: 3 total
// 1: integer, non-negative, can be 0 
// 2: any primitive data type, first to be repeated
// 3: any primitive data type, second to be repeated
// R: an array of size n filled with the two values alternating

// Pseudo Code

    // create an array
    // create a loop that starts at 0 and ends at n
    // if the last element in the array is the first value, push the second value into the array, otherwise push the first value into the array
    // return the array

function alternate(n, val1, val2){
    let arr = [];
    for(let i = 0; i < n; i++) {
        arr.push(arr.at(-1) === val1 ? val2 : val1)
    }
    return arr;
}

// Test Cases:

console.log(alternate(5, true, false)); // [true, false, true, false, true]
console.log(alternate(10, 'blue', 'red')); // ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
console.log(alternate(0, 'one', 'two')); // []