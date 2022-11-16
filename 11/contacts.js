const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContact = (value) => {
  let input = { nama: value.nama, email: value.email, noHp: value.noHp };
  let Data = JSON.parse(fs.readFileSync("data/contact.JSON", "utf-8"));

  // check unique email
  const duplikat = Data.find((list) => {
    value.email == list.email;
  });
  // if (!duplikat) {
  //   Data.push(input);
  //   fs.writeFileSync("data/contact.JSON", JSON.stringify(Data));
  // }

  console.log(value.email);
  console.log(value);
  // console.log(Data);
  console.log(
    Data.find((find) => {
      find.nama === "Izac";
      // console.log(find);
    })
  );

  // console.log("Email sudah ada, gunakan email lain");
};

module.exports = { simpanContact };
