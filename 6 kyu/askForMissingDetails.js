askForMissingDetails=r=>r.filter(o=>(p=Object.keys(o).find(k=>o[k]===null),p?(o.question=`Hi, could you please provide your ${p}.`,o):0))