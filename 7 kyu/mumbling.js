function accum(s) {
    let res = '';
    for(let i = 0; i < s.length; i++) {
        let substr = s[i].toUpperCase();
        for(let j = 0; j < i; j++) substr += s[i].toLowerCase();
        res += i === s.length - 1 ? substr : substr + '-';
    }
    return res;
}