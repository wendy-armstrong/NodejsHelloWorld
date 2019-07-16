const fs = require('fs-extra');
let content = ' Hello world ' +  new Date() + '\n this is line 2\n this is line 3';
console.log(content);
fs.writeFile('output.txt', content);