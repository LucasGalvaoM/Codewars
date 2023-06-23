function topThreeWords(text) {
    let words = [];
    text = text.replace(/[^\w\s']+/g, '').split('\n').join('').split(' ');
    text.forEach(str => {
        str = str.toLowerCase();
        if(str === '') return;
        if(!words.some(obj => obj.word === str)) {
            words.push({word: str, count: 0});
        }
        words.find(obj => obj.word === str).count++;
    });;
    words.sort((a, b) => b.count-a.count);
    let result = [];
    words.forEach((str, i) => { if(str.word && i < 3 && /[a-zA-Z]/.test(str.word)) result.push(str.word); })
    return result;
}