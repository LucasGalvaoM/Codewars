function formatWords(arr){
    return arr.reduce((acc, val, i) => i === arr.length - 2 ? !val ? acc + '' : acc + val + ' and ' : i === arr.length - 1 ? acc + val : val ? acc + val + ', ', '')
}

console.log(formatWords(['one', 'two', 'three', 'four']))
console.log(formatWords(['one']))