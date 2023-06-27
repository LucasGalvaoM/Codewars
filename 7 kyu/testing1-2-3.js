const number = a => a.reduce((a, c, i) => [...a, `${i+1}: ${c}`], []);

/*
    using map would've been quicker:

    const number = a => a.map((v, i) => `${i+1}: ${c}`);
*/