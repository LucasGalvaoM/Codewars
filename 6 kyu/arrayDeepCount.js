function deepCount(arr){
    let res = 0;
    function recursive(arr) {
        for(let i of arr) {
            res++;
            if(Array.isArray(i)) recursive(i);
        }
        return res;
    }
    return recursive(arr);
}