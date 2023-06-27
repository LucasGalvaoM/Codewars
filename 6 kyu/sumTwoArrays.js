function addArrays(arr1, arr2) {
    let res = ((+arr1.join('')+ +arr2.join(''))+'').split('')
    if(res[0] == 0) return [];
    if(res[0] === '-') {
        res = res.slice(1).map(n => +n);
        res[0] = -res[0];
        return res;
    }
    return res.map(n => +n);
}