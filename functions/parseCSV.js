const papa = require('papaparse');

function main(csv) {
    const data = papa.parse(csv, { header: true }).data;
    return data;
}

module.exports = main;