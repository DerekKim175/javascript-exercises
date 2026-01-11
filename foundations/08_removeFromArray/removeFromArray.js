const removeFromArray = function(array, ...numbers) {
    for (let num of numbers) {

        array = array.filter(x => x !== num);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
