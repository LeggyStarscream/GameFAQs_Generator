// Support Functions

function pickWithReplacement(itemArray, count) {
    const size = itemArray.length;
    var outArray = [];
    for (var i = 0; i < count; i++) {
        const selection = Math.floor(Math.random() * size)
        outArray.push(itemArray[selection]);
    }
    return outArray
};

function pickWithoutReplacement(itemArray, count) {
    const size = itemArray.length;
    if (count > size) {
        count = size;
    }
    var outArray = [];
    var tempArray = [];
    for (var i = 0; i < size; i++) {
        tempArray.push(i);
        randomIndex = Math.floor(Math.random() * (i+1));
        [tempArray[i], tempArray[randomIndex]] = [
            tempArray[randomIndex], tempArray[i]];
    }
    for (var i = 0; i < count; i++)
    {
        outArray.push(itemArray[tempArray[i]]);
    }
    return outArray;
};

function pickRandom(itemArray) {
    return itemArray[Math.floor(Math.random() * itemArray.length)];
};

function pickAtMost(itemArray, count) {
    const outArray = pickWithReplacement(itemArray, count);
    return outArray.filter((value, index) => outArray.indexOf(value) === index);
}