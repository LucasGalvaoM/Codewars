function multiplicationTable(size) {
    const arr = [];
    for(let i = 1; i <= size; i++) {
        const subArr = [];
        for(let j = i; j <= i*size; j += i)
        subArr.push(j);
        arr.push(subArr);
    }
    return arr;
}