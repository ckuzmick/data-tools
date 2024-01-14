const lo = require('lodash');

function main(data1, data2, key) {
    var combined = [];

    for (const row1 of data1) {
        const row2 = lo.find(data2, [key, row1[key]]);
        if (row2) {
            combined.push(lo.merge(row1, row2));
        }
    }

    return combined;
}

module.exports = main;