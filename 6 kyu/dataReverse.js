function dataReverse(data) {
    let res = [];
    let byte = [];
    data.forEach(num => {
        byte.push(num);
        if(byte.length === 8) {
            res.unshift(...byte);
            byte = [];
        }
    })
    return res;
}