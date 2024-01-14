const fs = require('fs');

function main(file) {
    const readFile = fs.readFileSync(file, 'utf8');
    return readFile;
}

module.exports = main;