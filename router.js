function route(handle, pathname, response) {
		console.log("About to route a request for " + pathname);
		if (typeof handle[pathname] === 'function') {
			handle[pathname](response);
		} else {
			console.log("No request handler found for " + pathname);
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write("<html><head><title>404 Not found.</title></head>");
			response.write("<body>");
			response.write("<p>404 Not found.</p>");
			response.write("</body></html>");	
			response.end();
		}
}

exports.route = route;