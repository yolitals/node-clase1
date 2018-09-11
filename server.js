var http = require("http");
var url = require("url");
var carrera = "Computer Science"
function serverStart(route) {
    http.createServer(function(request, response) {
        var pathname = url.parse(request.url).pathname;
        var curso;
        curso = "Programacion 3";
        console.log("Received petition for " + pathname);
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola mundo desde " + curso +", " + carrera);
        response.end();
    }).listen(4448);
    console.log("Server started...");
}
exports.start = serverStart;