function customBetween(params) {
    const {a, b, c} = params;
    return c > a && c < b
}

function customMax(params) {
    const {max, current} = params;
    return max >= current
}

function customMatch(params) {
    const {text1, text2} = params;
    console.log('texto1: ', text1);
    console.log('texto2: ', text2);
    return text1 === text2;
}

exports.customBetween = customBetween;
exports.customMax = customMax;
exports.customMatch = customMatch;