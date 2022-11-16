const yargs = require("yargs");
const { simpanContact } = require("./contacts");

yargs.command({
  command: "add",
  describe: "menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email",
      demandOption: true,
      type: "string",
    },
    noHp: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    const contact = {
      nama: argv.nama,
      email: argv.email,
      noHp: argv.noHp,
    };
    simpanContact(contact);
  },
});

yargs.parse();
