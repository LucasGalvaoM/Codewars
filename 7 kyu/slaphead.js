function bald(str){
    let arr = ['Clean!', 'Unicorn!', 'Homer!'];
    const clean = str.replaceAll('/', '');
    let word;
    if((str.length-clean.length) > 5) {
        word = 'Hobo!';
    }
    else if((str.length-clean.length) > 2) {
        word = 'Careless!';
    }
    else {
        
        word = arr[str.length-clean.length];
    }
    return [clean, word];
}