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
    return text1 === text2;
}

function checkAllowPayemntType(params) {
    const {allowedPayementTypes, paymentType} = params;
    return allowedPayementTypes.includes(paymentType);
}

exports.customBetween = customBetween;
exports.customMax = customMax;
// exports.customMatch = customMatch;
exports.checkAllowPayemntType = checkAllowPayemntType;