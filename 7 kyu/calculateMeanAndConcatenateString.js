function mean(arr) {
    let sum = 0;
    let str = "";
    arr.forEach(el => isNaN(el) ? str += el : sum += +el);
    return [sum/10, str];
}