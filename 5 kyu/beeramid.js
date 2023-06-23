function beeramid(bonus, price) {
    let i = 1;
    let completions = 0;
    while(bonus-i*i*price >= 0) {
      bonus -= (i*i)*price;
      completions++;
      i++;
      console.log(bonus, completions)
    }
    return completions;
}

console.log(beeramid(21, 1.5));

// beeramid(1500, 2); // should === 12