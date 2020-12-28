function customBetween(a, b, c) {
    return c > a && c < b
}

function customMax(max, current) {
    return max >= current
}

exports.customBetween = customBetween;
exports.customMax = customMax;