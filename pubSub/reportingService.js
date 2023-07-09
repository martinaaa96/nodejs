const eventBus = require('./eventBus')

const collect = (data)=>{
    console.log('Reporting service - ' + data);

}

eventBus.subscribe('request', collect);


