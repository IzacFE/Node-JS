const fs = require("fs");

// console.log(fs);
// menuliskan string ke file (synchronous)
// fs.writeFileSync("test.txt", "Hello World secara Synchronous");

// try {
//   fs.writeFileSync("data/success.txt", "berhasil membuat directory");
// } catch (error) {
//   console.log(error);
// }

// Menuliskan string ke file dengan cara asynchronous
// const data = {
//   message: "Hello Asynchronous",
//   values: [1, 2, 3, 4, 5],
// };
// fs.writeFile("data/async.txt", JSON.stringify(data), (error) => {
//   console.log(error);
// });

// Membaca file secara synchronous
// console.log(fs.readFileSync("data/success.txt").toString());
// console.log(fs.readFileSync("data/success.txt", "utf-8"));

// Membaca file secara Asynchronous
// const result = fs.readFile("data/success.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// cara membaca line pada console (Readline)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input sebuah Nama: ", (nama) => {
  rl.question("Input no HP: ", (noHp) => {
    console.log(`Ini inputnya Nama : ${nama}`);
    console.log(`Ini inputnya no HP : ${noHp}`);
    rl.close();
    let Data = JSON.parse(fs.readFileSync("data/contact.JSON", "utf-8"));
    let input = {};
    input.name = nama;
    input.phone_number = noHp;
    Data.push(input);
    fs.writeFileSync("data/contact.JSON", JSON.stringify(Data));
  });
});
