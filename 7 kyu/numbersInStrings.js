// P: string, lowercase, includes numbers, no leading zeros, no negatives
// R: largest number in string

// Pseudo Code:

    // create a variable with a initial negative value to keep track of the largest number
    // create a variable to concatanate numbers in order
    // loop though the string
    // add number to the current number variable
    // if a letter is found, set that variable to an empty string
    // if the current number is greater than the greater number variable assign that number to it
    // return greater number

function solve(s){
    let res = -1;
    let num = '';
    for(let i of s) {
        if(+i === +i) num += i
        else num = ''
        if(+num > res) res = +num;
    }
    return res;
};

// Test Cases:

console.log(solve('gh12cdy695m1')) // 695
console.log(solve('2ti9iei7qhr5')) // 9
console.log(solve('vih61w8oohj5')) // 61
console.log(solve('f7g42g16hcu5')) // 42
console.log(solve('lu1j8qbbb85')) //85