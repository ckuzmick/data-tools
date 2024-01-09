const yargs = require('yargs/yargs')(process.argv.slice(2)).argv;
const parseCSV = require('../functions/parseCSV');
const readFile = require('../functions/readFile');
const combine = require('../functions/combineData');

function main(key, inputPath1, inputPath2, outputPath) {
    const csv1 = readFile(inputPath1);
    const csv2 = readFile(inputPath2);
    const data1 = parseCSV(csv1);
    const data2 = parseCSV(csv2);

    const combined = combine(data1, data2, key);

    const final = unparseCSV(combined)
    
}