evenLast=r=>r.reduce((a,c,i)=>i%2===0?a+c:a,0)*r.at(-1)||0