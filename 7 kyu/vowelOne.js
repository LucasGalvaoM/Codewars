vowelOne=s=>[...s].map(c=>'aeiou'.includes(c.toLowerCase())?1:0).join('')