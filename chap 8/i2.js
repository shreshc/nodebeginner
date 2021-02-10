//just run node i2.js so router and server both will be runned 

var server = require("./server");
console.log("i2")
var router = require("./router");
server.start1(router.route1);
