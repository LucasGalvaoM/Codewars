const maskify = str => [...str].map((c, i) => i > str.length-5 ? c : '#').join('')