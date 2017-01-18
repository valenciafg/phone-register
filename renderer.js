// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const serialport = require('serialport')
// const createTable = require('data-table')
//
// serialport.list((err, ports) => {
//   console.log('ports', ports);
//   if (err) {
//     document.getElementById('error').textContent = err.message
//     return
//   } else {
//     document.getElementById('error').textContent = ''
//   }
//
//   if (ports.length === 0) {
//     document.getElementById('error').textContent = 'No ports discovered'
//   }
//
//   const headers = Object.keys(ports[0])
//   const table = createTable(headers)
//   tableHTML = ''
//   table.on('data', data => tableHTML += data)
//   table.on('end', () => document.getElementById('ports').innerHTML = tableHTML)
//   ports.forEach(port => table.write(port))
//   table.end();
// })
var SerialPort = require('serialport');
var portID = 'COM2';
var args = {
  autoOpen: false,
  baudRate: 9600,
  dataBits: 8,
  parser: SerialPort.parsers.readline('\n')
  //parser: SerialPort.parsers.byteLength(82),
};
var port = new SerialPort(portID, args);

port.open(function(err){
  if(err){
    return console.log(' Error opening port: ', err.message);
  }
});

// open errors will be emitted as an error event
port.on('open', function() {
  console.log('Port Open! ');
});
port.on('data', function (data) {
  var consoleData = "";
  var dataSize = data.length;
  for(var i=1; i < dataSize && dataSize > 0; i++ ){
    if(data[i] != ' '){
      consoleData += data[i];
    }
  }
  var arrayData = consoleData.split('|');
  var phoneData = {
    ext:arrayData[0],
    dialedPhone: arrayData[3],
    callTime: arrayData[4],
    callDuration: arrayData[5],
    callDurationSeconds: arrayData[6],
    flag1: arrayData[1],
    flag2: arrayData[2],
    flag3: arrayData[7],
    flag4: arrayData[8],
    flag5: arrayData[9],
    flag6: arrayData[10]
  }
  console.log('Extension: '+phoneData.ext+' destination Number: '+phoneData.dialedPhone+' Start Time: '+phoneData.callTime+' Duration: '+phoneData.callDuration);
});
port.on('disconnect',function(){
  console.log('Desconnected');
});
port.on('error',function(e){
  console.log('Error: ',e.message);
});
