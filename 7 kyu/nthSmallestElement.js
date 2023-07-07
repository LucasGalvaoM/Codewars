// P: 1: array of integers (numbers can be negative and zeros), a length of at least 3 elements
//    2: the position of the smallest element to be returned
// R: the smallest n element in the array

// Pseudo Code:

    // Sort the array in ascending order
    // Return the nth smallest element in the array (subtract 1 from the position parameter)

const nthSmallest = (arr, pos) => arr.sort((a, b) => a-b)[pos-1]

// Test Cases:

console.log(nthSmallest([3,1,2], 2)); // 2
console.log(nthSmallest([15,20,7,10,4,3])); // 7
console.log(nthSmallest([-5,-1,-6,-18])); // -1