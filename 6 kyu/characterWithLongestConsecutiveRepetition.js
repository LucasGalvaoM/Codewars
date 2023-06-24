function longestRepetition(s) {
    if(!s) return ["", 0];
      let arr = [];
      let j = 1;
      for(let i = 0; i < s.length; i++) {
          if(!arr.some(obj => obj.char === s[i])) arr.push({char: s[i], n: 1, p: i});
      if(s[i-1] === s[i]) j++
      else j = 1;
      let obj = arr[arr.findIndex(obj => obj.char === s[i])];
      if(j > obj.n) {
          obj.n = j;
          obj.p = i;
        }
      }
      return Object.values(arr.sort((a, b) => b.n-a.n || a.p-b.p)[0]).filter((_, i) => i < 2);
}
  