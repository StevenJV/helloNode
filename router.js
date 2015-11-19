function route(handle,pathname) {
		
		//temporarily hide 'noise'
		if (pathname != "/favicon.ico") {
			console.log("About to route a request for " + pathname);
			if (typeof handle[pathname] === 'function') {
				console.log("Handling " + pathname);
				return handle[pathname]();
			} else {
				console.log("No request handler found for " + pathname);
				return "404 Not Found.";
			}
		}
}

exports.route = route;