function maxProduct(r, n1 = Math.max(...r)) {
    r.splice(r.indexOf(n1), 1);
    return n1*Math.max(...r);
}