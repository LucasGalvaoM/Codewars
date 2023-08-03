function decipherThis(str) {
    return str.split(' ').map(word => {
        let arr = [...word];
        let code = ''
        for(let i of arr) {
            if(!isNaN(+i)) code += i;
        }
        arr[1] = arr.at(-2);
        arr[arr.length-1] = word[1];
        arr.splice(0, code.length);
        arr[0] = String.fromCharCode(code);
        return arr.join('')
    }).join(' ')
}

//decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')