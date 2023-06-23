function formatDuration(t) {
    if(!t) return 'now';
    let s = `${t % 60} seconds`;
    let m = `${~~(t / 60 % 60)} minutes`;
    let h = `${~~(t / 3600 % 24)} hours`;
    let d = `${~~(t / 86400 % 365)} days`;
    let y = `${~~(t / 31536000)} years`;
    let arr = [y, d, h, m, s];
    return arr.filter(str => str.split(' ')[0] !== '0').map(str => {
        let nA = str.split(' ');
        if(nA[0] == 1) nA[1] = nA[1].slice(0, -1);
        return nA.join(' ');
    }).reduce((a, c, i, arr) => i === arr.length-2 ? `${a}${c} and ` : i === arr.length-1 ? a + c : `${a}${c}, `, '');
}

