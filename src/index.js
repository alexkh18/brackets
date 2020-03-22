module.exports = function check(str, bracketsConfig) {
    let availablePair = bracketsConfig.map(elem => elem.join(''))
    let replacedStr = str;

    for(let i = 0 ; i < str.length / 2; i++) {
        for(let j = 0 ; j < availablePair.length; j++) {
            replacedStr = replacedStr.replace(availablePair[j], '')
        }
    }
    
    if (replacedStr) {
        return false
    } else {
        return true;
    }

}

