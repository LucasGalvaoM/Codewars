function createPhoneNumber(n){
    return n.reduce((a, c, i) => i === 2 ? a + c + ') ' : i === 5 ? a + c + '-' : a + c, '(')
}  