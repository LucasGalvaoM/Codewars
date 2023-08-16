const binaryArrayToNumber = arr => {
  let mult = 1;
  return arr.reduceRight((acc, num) => {
    const m = mult;
    mult *= 2;
    return acc+(num*m)
    }, 0)
}