var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers")

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/ls"] = requestHandlers.ls;
handle["/ten"] = requestHandlers.ten;

server.start(router.route, handle);
