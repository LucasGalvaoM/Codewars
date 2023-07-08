// P: object of any length
// R: the number of string values in an object (even if it is in a nested object)

// Pseudo Code:
    
    // create a counter variable with a initial value of 0
    // iterate through the object
    // if the value is a string, increment the counter by 1
    // if the value is an object, iterate through the object
    // return the counter

function strCount(obj) {
    let count = 0;
        for(let key in obj) {
            if(typeof obj[key] === 'string') count++;
            if(typeof obj[key] === 'object') count+=strCount(obj[key])
        }
    return count;
}

// Test Cases:

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
    })); 
    // 3