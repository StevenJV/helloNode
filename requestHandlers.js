var exec = require("child_process").exec;

function ls(response) {
	console.log("Request handler 'ls' was called.");
	exec("ls -lah", function (error, stdout, stderr) { 
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<html><head><title>Hello.</title></head>");
		response.write("<body>");
		response.write("<pre>"+stdout+"</pre>");
		response.write("</body></html>");	
		response.end();
	}); 
}

function ten(response) {
  	console.log("Request handler 'ten' was called.");
	function sleep(milliSeconds) {
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}
  	sleep(10000);
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("Ten seconds");
	response.write("</body></html>");	
	response.end();	
}

function start(response) {
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("Start");
	response.write("</body></html>");	
	response.end();	
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<html><head><title>Hello.</title></head>");
	response.write("<body>");
	response.write("upload");
	response.write("</body></html>");	
	response.end();		
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;
exports.ten = ten;

