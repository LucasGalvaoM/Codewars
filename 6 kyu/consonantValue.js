function solve(s) {
    let arr = [, 'b', 'c', 'd', , 'f', 'g', 'h', , 'j', 'k', 'l', 'm', 'n', , 'p', 
  'q', 'r', 's', 't', , 'v', 'w', 'x', 'y', 'z'];
    let value = 0;
    let values = [];
    for(let i of s) {
      if(!arr.includes(i)) {
      values.push(value);
      value = 0;
      continue;
    }
      value += arr.indexOf(i)+1;
      if(s.indexOf(i) === s.length-1) values.push(value);
    }
    return Math.max(...values);
};