const sumAll = function(start, end) {
    
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";

    
    let res = [];
    
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        res.push(i);
    }

    return res.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// Do not edit below this line
module.exports = sumAll;
