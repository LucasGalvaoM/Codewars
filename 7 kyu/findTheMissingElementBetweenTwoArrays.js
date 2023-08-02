function findMissing(arr1, arr2) {
    return arr1.find(num => {
        const res = !arr2.includes(num);
        arr2.splice(arr2.indexOf(num), 1);
        return res;
    });
}  