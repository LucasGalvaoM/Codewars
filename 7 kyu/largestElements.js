// PREP!
// P: 1: whole number, can be 0 - 2: array of integers
// R: array that includes top n highest numbers

// Pseudo Code:

    // sort the array in ascending order
    // slice the first n elements from the array
    // return sliced array

const largest = (n, arr) => n ? arr.sort((a, b) => a-b).slice(-n) : []

// Test Cases:

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // [9, 10]
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])) // [-1, 0]
console.log(largest(0, [1, 2, 3, 4, 8, 7, 6, 5])) // []