const repeatString = function(string, num) {
    
    if (num < 0) {
        return "ERROR";
    }

    let i = num, result = "";

    while (i > 0) {
        result += string;
        i -= 1;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
