const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    say: "Hello World",
  });
});

app.get("/about", (req, res) => {
  res.send("This is About me");
});

app.get("/contact", (req, res) => {
  res.send("Contact list");
});

app.get("/contact/:id", (req, res) => {
  res.send("Contact ID : " + req.params.id);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});
