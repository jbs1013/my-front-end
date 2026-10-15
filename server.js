const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Every path serves index.html, since this is a simple placeholder app.
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
