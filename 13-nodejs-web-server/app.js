const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const url = req.url;
  if (url === "/about") {
    res.write("<h1>Ini About</h1>");
    res.end();
  } else if (url === "/contact") {
    res.write("<h1>Ini Contact</h1>");
    res.end();
  } else {
    res.write("<h1>Helloo There</h1>");
    res.write(url);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
