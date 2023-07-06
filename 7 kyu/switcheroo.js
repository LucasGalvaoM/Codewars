// P: string, only a's, b's & c's, sany length.
// R: same string but with a's and b's swapped.

// Pseudo Code:

// iterate through every letter
// if letter is a, change it to b
// if letter is b, change it to a

switcheroo=s=>[...s].map(c=>c==='a'?'b':c==='b'?'a':c).join('')