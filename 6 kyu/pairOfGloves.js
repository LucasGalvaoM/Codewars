function numberOfPairs(arr) {
    let gloves = { };
    arr.forEach(glove => gloves[glove] ? gloves[glove]++ : gloves[glove] = 1)
    return Object.values(gloves).reduce((acc, val) => acc + ~~(val/2), 0)
}