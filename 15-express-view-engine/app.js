const express = require("express");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mahasiswa = [{ nama: "izac" }, { nama: "aqsha" }, { nama: "ghifari" }];
  // const mahasiswa = [];

  res.render("index", { nama: "Izac Aqsha Ghifari", title: "home", mahasiswa });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
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
