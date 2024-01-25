import library from "../other/usages.json";

function main(inputFunction) {
    let obj = library.filter(item => item.tool === inputFunction);
    console.log(obj[0].tool, ":", obj[0].use)
}

module.exports = main;