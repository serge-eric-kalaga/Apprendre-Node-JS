const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log("Server created !")
    res.end("Server created !");
})

server.listen(8080, "localhost", ()=>{console.log("Server started at http://localhost:8080")});
