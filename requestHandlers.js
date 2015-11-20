var exec = require("child_process").exec;

function ls(response) {
	console.log("Request handler 'ls' was called.");
	exec("ls -lah", { timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) { 
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write("<html><head><title>Hello.</title></head>");
			response.write("<body>");
			response.write("<pre>"+stdout+"</pre>");
			response.write("</body></html>");	
			response.end();
	}); 
  	console.log("Request handler 'ls' completed.");	
}

function find(response) {
  	console.log("Request handler 'find' was called.");
	exec("find /users", { timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) { 
			response.writeHead(200, {"Confindt-Type": "text/html"});
			response.write("<html><head><title>Hello.</title></head>");
			response.write("<body>");
			response.write("<pre>"+stdout+"</pre>");
			response.write("</body></html>");	
			response.end();
	}); 
  	console.log("Request handler 'find' completed.");	
}

function start(response) {
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("Start");
	response.write("</body></html>");	
	response.end();	
  	console.log("Request handler 'start' completed.");	
	
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("upload");
	response.write("</body></html>");	
	response.end();		
  	console.log("Request handler 'upload' completed.");	
	
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;
exports.find = find;

