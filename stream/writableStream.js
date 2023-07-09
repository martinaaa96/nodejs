const fs= require('fs');

const writeStream = fs.createWriteStream('./output.txt', {encoding:'utf-8'});


const chunk1 = 'First chunk';
const chunk2 = 'Second chunk';
const chunk3 = 'Third chunk';

writeStream.write(chunk1 + '\n')
writeStream.write(chunk2 + '\n')
writeStream.write(chunk3 + '\n')

writeStream.on('close', ()=>{
   console.log('Write stream stop');
});
writeStream.end();
