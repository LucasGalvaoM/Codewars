function getMichaelLastName(inputText) {
    let res = [];
    let chars = '?.,;!'
    inputText.split(' ').forEach((str, i, arr) => {
      let name = arr[i+1];
      if(str === 'Michael' && name[0] === name[0].toUpperCase())
      chars.includes(name[name.length-1]) ? res.push(name.slice(0, -1)) : res.push(name);
    })
    return res;
}