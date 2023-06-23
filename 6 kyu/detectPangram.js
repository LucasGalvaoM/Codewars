function isPangram(str){
    let al = "abcdefghijklmnopqrstuvwxyz";
    for(let i of str.toLowerCase()) { al = al.replace(i, '');}
    return al.length == 0;
}