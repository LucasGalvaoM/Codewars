function smile(text) {
    let eyes = ':;='
    let noses = '-~'
    let mouths = '([';
    let hMouths = ')]';
    for(let i = 0; i < text.length; i++) {
      if(eyes.includes(text[i])) {
        if(mouths.includes(text[i+1]) || (mouths.includes(text[i+2]) && noses.includes(text[i+1]))) {
            let mouth = mouths.includes(text[i+1]) ? 1 : 2;      
            text = text.split('')
            console.log(text[i+mouth])
            text[i+mouth] = hMouths[mouths.indexOf(text[i+mouth])];
            text = text.join('')
        } 
      }
    }
    return text;
}