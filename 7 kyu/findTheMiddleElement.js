const gimme = arr => arr.findIndex(num => Math.max(...arr) !== num && Math.min(...arr) !== num)