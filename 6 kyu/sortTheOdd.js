sortArray=(a,c=-1)=>a.map(n=>n%2!==0?a.filter(n=>n%2!==0).sort((a,b)=>a-b)[++c]:n)