function dotCalculator(str) {
	const [val1, operation, val2] = str.split(' ');
  switch(operation) {  
      case '+':
        return val1+val2
      break;
      case '-':
        return '.'.repeat(val1.length-val2.length)
      break;
      case '*':
        return '.'.repeat(val1.length*val2.length)
      break;
      case '//':
        return '.'.repeat(val1.length/val2.length)
      break;
  }
}