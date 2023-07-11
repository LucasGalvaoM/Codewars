function unusedDigits(...arr) {
    let nums = '0123456789';
    arr.forEach(str => {
        for(let i of str+'')if(nums.includes(i)) nums = nums.replace(i, '');
    })
    return nums;
}