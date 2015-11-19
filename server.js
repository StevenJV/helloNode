var http = require("http");
var url  = require("url");

function start() {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<html><head><title>Hello.</title></head>");
		response.write("<body>");
		response.write("<p>Hello world.</p>");
		response.write("</body></html>");	
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("server has started.");
}

exports.start = start;
