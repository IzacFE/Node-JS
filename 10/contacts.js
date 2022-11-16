const fs = require("fs");
const readline = require("readline");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (result) => {
      resolve(result);
    });
  });
};

const simpanContact = (nama, email) => {
  let input = { nama, email };
  let Data = JSON.parse(fs.readFileSync("data/contact.JSON", "utf-8"));
  Data.push(input);
  fs.writeFileSync("data/contact.JSON", JSON.stringify(Data));
  rl.close();
};

module.exports = { pertanyaan, simpanContact };
