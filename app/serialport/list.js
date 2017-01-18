const serialport = require('serialport');
serialport.list(function(err,ports){
    var outStr="";
    console.log(JSON.stringify(ports));
    if(err){ console.log(err); return; }
    outStr = ports.map(function(port){
        return port.comName
    }).join(", ");
    document.body.innerHTML += outStr;
});
