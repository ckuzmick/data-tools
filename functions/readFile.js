const fs = require('fs');

function main(file) {
    const file = fs.readFileSync(file, 'utf8');
    return file;
}

module.exports = main;