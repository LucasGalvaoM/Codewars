let extend = (...arr) => {
    arr = [...arr];
    let res = {};
    arr.forEach(obj => {
      if(typeof obj === 'object') {
        for(let key in obj) {
          if(!Object.keys(res).includes(key)) res[key] = obj[key];
        }
      }
    });
    return res;
}