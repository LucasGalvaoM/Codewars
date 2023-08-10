function getFirstPython(arr) {
    const dev = arr.find(obj => obj.language === 'Python');
    return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers'
}