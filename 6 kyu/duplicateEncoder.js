duplicateEncode = s => s.toLowerCase().split('').reduce((a, c, i, r) => r.indexOf(c) === r.lastIndexOf(c) ? a + '(' : a + ')', '');