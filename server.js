var http = require("http");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("<p>Hello world.</p>");
	response.write("</body></html>");	
	response.end();
}).listen(8888);
