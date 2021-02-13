var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(pathname);
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started on port 8888");
}

exports.start1 = start;