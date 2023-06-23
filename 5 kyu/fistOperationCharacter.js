function firstOperationCharacter(expr) {
  let index = 0;
  let pCount = 0;
  let chars = '+*';
  let arr = [];
  for(let i of expr) {
    index++;
    let pos = index;
    if(i === '(') pCount++;
    if(chars.includes(i)) arr.push({pCount, type: chars.indexOf(i), pos});
    if(i === ')') pCount--;
  }
  return arr.sort((a, b) => b.pCount-a.pCount || b.type-a.type || a.pos-b.pos)[0].pos-1;
}