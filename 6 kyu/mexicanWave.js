function wave(str)  {
    let arr = [];
    str = str.split('')
    for(let i = 0; i < str.length; i++) {
        str = str.map(s => s.toLowerCase());
        str[i] = str[i].toUpperCase();
        if(str[i] !== ' ') arr.push(str.join(''));
    }
    return arr;
}