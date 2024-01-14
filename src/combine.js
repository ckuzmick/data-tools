const yargs = require('yargs/yargs')(process.argv.slice(2)).argv;
const parseCSV = require('../functions/parseCSV');
const unparseCSV = require('../functions/unparseCSV');
const readFile = require('../functions/readFile');
const combineData = require('../functions/combineData');
const fs = require('fs');

function main(key, inputPath1, inputPath2, outputPath) {
    const csv1 = readFile(inputPath1);
    const csv2 = readFile(inputPath2);
    const data1 = parseCSV(csv1);
    const data2 = parseCSV(csv2);

    const combined = combineData(data1, data2, key);

    const final = unparseCSV(combined);

    fs.writeFileSync(outputPath, final, 'utf8');
    console.log(`merged ${inputPath1} and ${inputPath2} into ${outputPath} based on ${key}`);
}

module.exports = main;