function dominator(arr) {
    let objs = [];
    arr.forEach(num => {
        if(!objs.some(obj => obj.num === num)) objs.push({num, times: 1});
        else {
            objs[objs.findIndex(obj => obj.num === num)].times++;
        }
    })
    const deno = objs.sort((a, b) => b.times-a.times)[0];
    return deno.times > arr.length/2 ? deno.num : -1;
}