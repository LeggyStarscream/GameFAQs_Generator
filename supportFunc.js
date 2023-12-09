// Support Functions

var lightMode = true;

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
};

function pickAtMost_Evenly(itemArray, count) {
    const numberChosen = Math.floor(Math.random() * count) + 1;
    const outArray = pickWithReplacement(itemArray, numberChosen);
    return outArray.filter((value, index) => outArray.indexOf(value) === index);
};

function pickNumberWithinRange(itemArray, min, max) {
    const randomIndex = Math.floor(Math.random() * (1+max-min)) + min;
    return pickWithoutReplacement(itemArray, randomIndex);
};

// Not a random generation support function, but support none the less

function switchColorMode() {
    if (lightMode) { //Switch to Dark Mode
        document.body.style.backgroundColor = "#333333";
        document.body.style.color = "#dddddd";
        document.getElementById('Output').style.borderColor = "#dddddd";
        
        switchCSSClass("equip_dun_grammar_text_light", "equip_dun_grammar_text_dark")
        switchCSSClass("dun_boss_grammar_text_light", "dun_boss_grammar_text_dark")
        switchCSSClass("key_town_grammar_text_light", "key_town_grammar_text_dark")
        //document.getElementById('Credits').style.backgroundColor = "#333333";
    }
    
    else { //Switch to Light Mode
        document.body.style.backgroundColor = "#cccccc";
        document.body.style.color = "#000000";
        document.getElementById('Output').style.borderColor = "#000000";
        //document.getElementById('Credits').style.backgroundColor = "#cccccc";

        switchCSSClass("equip_dun_grammar_text_dark", "equip_dun_grammar_text_light")
        switchCSSClass("dun_boss_grammar_text_dark", "dun_boss_grammar_text_light")
        switchCSSClass("key_town_grammar_text_dark", "key_town_grammar_text_light")
    }

    lightMode = !lightMode;
}

/**
 * utility function to switch _all_ the instances of the from CSS class to the to CSS class
 * @param {String} fromClass current CSS class
 * @param {String} toClass CSS class to switch ingot
 */
function switchCSSClass(fromClass, toClass) {
    // this is required because fucking around with a raw HTML collection can cause
    // stuff to not render-- so we select and copy into a static array so stuff won't
    // randomly drop from the collection mid-iteration
    Array.from(document.getElementsByClassName(fromClass))
        .map((element, _index, _list) => {
            element.setAttribute("class", toClass)
        })
}