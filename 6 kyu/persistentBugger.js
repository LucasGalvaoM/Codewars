function persistence(num) {
    let persistences = 0;
    return recursive(num);
    function recursive(n) {
      if(String(n).length === 1) return persistences;
      const product = [...n+''].reduce((acc, num) => +num*acc, 1);
      persistences++;
      return recursive(product);
    }
}