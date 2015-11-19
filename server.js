var http = require("http");

function onRequest(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("<p>Hello world!</p>");
	response.write("</body></html>");	
	response.end();
};
	
http.createServer(onRequest).listen(8888);
