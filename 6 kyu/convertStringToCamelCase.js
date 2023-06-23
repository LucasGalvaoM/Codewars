function toCamelCase(str){
    return str.split(/[_-]/).reduce((acc, val, i) => acc + val.slice(0, 1).toUpperCase() + val.slice(1));
}