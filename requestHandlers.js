var exec = require("child_process").exec;

function header(response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<html><head><title>Hello.</title></head>");
		response.write("<body>");	
		response.write("<p><a href='ls'>directory listing</a> <a href='find'>all files</a></p>");
}

function ls(response) {
	console.log("Request handler 'ls' was called.");
	exec("ls -lah", { timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) { 
			header(response);
			response.write("<pre>"+stdout+"</pre>");
			response.write("</body></html>");	
			response.end();
	}); 
  	console.log("Request handler 'ls' completed.");	
}

function find(response) {
  	console.log("Request handler 'find' was called.");
	exec("find /", { timeout: 10000, maxBuffer: 20000*1024 },
		function (error, stdout, stderr) { 
			header(response);
			response.write("<pre>"+stdout+"</pre>");
			response.write("</body></html>");	
			response.end();
	}); 
  	console.log("Request handler 'find' completed.");	
}

function start(response) {
	console.log("Request handler 'start' was called.");
	header(response);
	response.write("Start");
	response.write("</body></html>");	
	response.end();	
  	console.log("Request handler 'start' completed.");	
	
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	header(response);
	response.write("upload");
	response.write("</body></html>");	
	response.end();		
  	console.log("Request handler 'upload' completed.");	
	
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;
exports.find = find;

