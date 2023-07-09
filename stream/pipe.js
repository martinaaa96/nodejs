const fs = require('fs');

const readStream = fs.createReadStream('./data.txt');

const writeStream = fs.createWriteStream('./datacopy.txt');

readStream.pipe(writeStream);

