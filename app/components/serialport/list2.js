// import SerialPort from '../../../node_modules/serialport';
// var serialPort = require('serialport');
// var SerialPort = require("serialport")
// console.log(SerialPort.serialPort); // undefined
// console.log(SerialPort.SerialPort);
// var portList = [{index:1,asd:'asd'},{index:2,asd:'213'}];
// serialPort.list(function (err, ports) {
//   ports.forEach(function(port) {
//     portList.push(post);
    /*console.log(port.comName);
    console.log(port.pnpId);
    console.log(port.manufacturer);*/
//   });
// });
// const serialport = require('../../../node_modules/serialport');
// import * as SerialPort from '../../../node_modules/serialport';

// export default serialport;
var serialPort1 = require('../../../node_modules/serialport');
console.log(serialPort1);
var portList = [];
serialPort1.list(function (err, ports) {
    console.log(err);
    console.log(ports);
  // ports.forEach(function(port) {
  //   console.log(port.comName);
  //   console.log(port.pnpId);
  //   console.log(port.manufacturer);
  //   portList.push(port);
  // });
});
export default portList;
