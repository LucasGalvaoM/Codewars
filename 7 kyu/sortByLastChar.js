// P: string with space separated words, all inputs are valid
// R: a sorted array based on the last character of each word

// Pseudo Code

    // remove spaces and place the strings in a list
    // iterate through the list
    // sort the list based on the last character of each string 
    // return sorted list

const last = str => str.split(' ').sort((a, b) => a.at(-1).localeCompare(b.at(-1)))

// Test Cases:

console.log(last('man i need a taxi up to ubud')) // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('take me to semynak')) // ['take', 'me', 'semynak', 'to']