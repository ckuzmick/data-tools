const papa = require('papaparse');

function main(json) {
    const csv = papa.unparse(json);
    return csv;
}

module.exports = main;