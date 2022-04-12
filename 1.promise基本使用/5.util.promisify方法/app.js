const util = require('util');
const fs = require('fs');

const mineReadFile = util.promisify(fs.readFile);

mineReadFile('./app.js')
  .then(data => console.log(data.toString()))
  .catch(reason => console.error(reason));
