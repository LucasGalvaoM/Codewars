let toWeirdCase = s => s.split(' ').map(s => [...s].reduce((a, c, i) => i % 2 === 0 ? a + c.toUpperCase() : a + c, '')).join(' ');