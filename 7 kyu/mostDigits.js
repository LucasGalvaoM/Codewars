// P: array of numbers, any length
// R: number with the most digits, if two numbers have the same number of digits, return the first one

// Pseudo Code:

    // iterate through the array
    // turn the numbers into strings
    // sort the strings in descending order based on their lengths
    // return the first value in the sorted array

findLongest=a=>a.sort((a,b)=>(b+'').length-(a+'').length)[0]


// Test Cases:

console.log(findLongest([1, 10, 100])) // 100
console.log(findLongest([9000, 8, 800])) // 9000
