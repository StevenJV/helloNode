var exec = require("child_process").exec;

function ls() {
	console.log("Request handler 'ls' was called.");
	var content = "ls";
	exec("ls ~/Code/helloNode -lah", function(error, stdout, stderr){
		content = stdout;
	})
	return content;
}

function start() {
	
	function sleep(milliSeconds){
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + milliSeconds);
	}

	sleep(10000);	
	console.log("Request handler 'start' was called.");
	return "Hello start.";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello upload.";
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;
