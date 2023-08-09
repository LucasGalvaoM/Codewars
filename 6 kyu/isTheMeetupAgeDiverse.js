function isAgeDiverse(arr) {
    const res = { };
    arr.forEach(obj => {
        switch(true) {
            case obj.age < 20:
                res["teens"] = true;
            break;
            case obj.age < 30:
                res["twienties"] = true;
            break;
            case obj.age < 40:
                res["thirties"] = true;
            break;
            case obj.age < 50:
                res["fourties"] = true;
            break;
            case obj.age < 60:
                res["fifties"] = true;
            break;
            case obj.age < 70:
                res["sixties"] = true;
            break;
            case obj.age < 80:
                res["seventies"] = true;
            break;
            case obj.age < 90:
                res["eighties"] = true;
            break;
            case obj.age < 100:
                res["nineties"] = true;
            break;
            default:
                res["centenarian"] = true;
            break;
        }
    })
    return Object.values(res).every(val => val === true) && Object.values(res).length === 10;
}