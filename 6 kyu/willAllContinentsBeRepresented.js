function allContinents(arr) {
    let res = { }
    arr.forEach(obj => res[obj.continent] = true)
    return Object.values(res).every(val => val === true) && Object.values(res).length === 5
}