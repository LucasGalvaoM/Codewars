function searchArray(arr, q) {
    if(arr.some(a => !Array.isArray(a) || a.length !== 2) || q.length !== 2) throw new Error()
    for(let i = 0; i < arr.length; i++) {
        if(q[0] === arr[i][0] && q[1] === arr[i][1]) return i;
    }
    return -1;
}