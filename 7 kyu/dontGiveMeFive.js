function dontGiveMeFive(s, e) {
    let c = 0;
    for(let i = s; i <= e; i++) {
        if(!((i+'').includes('5'))) c++
    }
    return c
}