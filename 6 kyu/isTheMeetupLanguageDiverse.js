function isLanguageDiverse(arr) {
    const langs = { };
    arr.forEach(obj => langs[obj.language] ? langs[obj.language]++ : langs[obj.language] = 1);
    return Math.max(...Object.values(langs)) <= Math.min(...Object.values(langs)) * 2
}