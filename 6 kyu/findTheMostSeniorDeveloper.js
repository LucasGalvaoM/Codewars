findSenior=(r,n=-1)=>r.reduce((a,o)=>o.age>n?(n=o.age,[o]):o.age===n?(a.push(o),a):a,0)