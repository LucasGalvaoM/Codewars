const apparently =str => str.split(' ').reduce((a, c, i, r) => c === 'and' || c === 'but' ? r[i+1] === 'apparently' ? a + ' ' + c : a + ' ' + c + ' apparently' : a + ' ' + c, '').replace(' ', '');