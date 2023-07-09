const fs = require('fs');

const path = require('path');


fs.writeFile(path.resolve(__dirname, './output.txt'), 'Some data here ',(err)=>{

    if(err){
        return 
    }
    console.log('File Created ');

});

