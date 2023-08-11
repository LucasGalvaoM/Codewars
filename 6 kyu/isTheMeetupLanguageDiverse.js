function isLanguageDiverse(arr) {
    const langs = { };
    arr.forEach(obj => langs[obj.language] ? langs[obj.language]++ : langs[obj.language] = 1);
    console.log(langs)
    return Math.max(...Object.values(langs)) <= Math.min(...Object.values(langs)) * 2
}