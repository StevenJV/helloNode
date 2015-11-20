var exec = require("child_process").exec,
	querystring = require("querystring"),
	fs = require("fs"),
	formidable = require("formidable");

var imageFileName = "images/test.png";

function header(response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<html><head><title>Hello.</title></head>");
		response.write("<body>");	
		response.write("<p><a href='start'>start form</a></p> <a href='ls'>directory listing</a> <a href='findFiles'>all files</a></p>");
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

function findFiles(response) {
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

function start(response, postData) {
	console.log("Request handler 'start' was called.");
	header(response);
	var body = 	'<form action="/upload" enctype="multipart/form-data" ' + 
				'method="post">' +
				'<input type="file" name="upload" multiple="multiple">' + 
				'<input type="submit" value="Upload file" />'+
				'</form>'+
				'</body>'+
				'</html>';
	response.write(body);		
	response.end();	
  	console.log("Request handler 'start' completed.");	
	
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files){
		console.log("parsing done.");
		fs.rename(files.upload.path, imageFileName, function(error) {
			if (error) {
				fs.unlink(imageFileName)
			}
		})
	});
	header(response);
	response.write("received image:<br>");
	response.write("<img src='/show'>");	
	response.write("</body></html>");	
	response.end();		
  	console.log("Request handler 'upload' completed.");	
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream(imageFileName).pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.ls = ls;
exports.findFiles = findFiles;
exports.show = show;

