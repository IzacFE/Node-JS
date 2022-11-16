const { pertanyaan, simpanContact } = require("./contacts");

(async function () {
  const nama = await pertanyaan("Masukkan nama anda : ");
  const email = await pertanyaan("Input sebuah Email: ");

  simpanContact(nama, email);
})();
