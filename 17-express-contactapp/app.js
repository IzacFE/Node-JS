const express = require("express");
const app = express();
const morgan = require("morgan");
const { loadContact } = require("./utils/contacts");
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Application level middleware
app.use((req, res, next) => {
  console.log("Time: " + Date.now());
  next();
});

// Third-party Middleware
app.use(morgan("dev"));

// Built in Middleware to acces file inside server ( deffault setting from express are file are protected)
app.use(express.static("public"));

app.get("/", (req, res) => {
  const mahasiswa = [{ nama: "izac" }, { nama: "aqsha" }, { nama: "ghifari" }];
  // const mahasiswa = [];

  res.render("index", { nama: "Izac Aqsha Ghifari", title: "home", mahasiswa });
});

app.get("/about", (req, res) => {

  res.render("about", { title: "about" });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact()
  res.render("contact", { title: "contact", contacts });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama)

  res.render("detail", { title: "contact", contact });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});
