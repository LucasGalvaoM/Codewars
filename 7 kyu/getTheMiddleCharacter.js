// Directions:

// get the middle character of a word
// if word is even, get 2 else get 1

// Parameter: string, length > 0, length < 1000
// return value

// Pseudo Code:

// check if str is even using %
// if even, return chars in index str.length/2 -1 and str.length/2
// if odd, return char in index str.length/2 rounded down

const getMiddle = s => s.length % 2 === 0 ? s[s.length/2-1] + s[s.length/2] : s[~~(s.length/2)];

// Test Cases:

console.log(getMiddle('test')) // es
console.log(getMiddle('testing')) // t  
console.log(getMiddle('middle')) // dd