function modifyMultiply (s,i,n) {
    let res = '';
    for(let j = 0; j < n; j++) res += '-'+s.split(' ')[i];
    return res.slice(1);
} 