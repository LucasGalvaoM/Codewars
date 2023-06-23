function likes(n) {
    if(!n.length) return 'no one likes this';
    if(n.length === 1) return `${n[0]} likes this`;
    if(n.length === 2) return `${n[0]} and ${n[1]} like this`;
    if(n.length === 3) return `${n[0]}, ${n[1]} and ${n[2]} like this`;
    return `${n[0]}, ${n[1]} and ${n.length-2} others like this`;
}