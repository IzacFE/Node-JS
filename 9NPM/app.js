const validator = require("validator");
console.log(validator.isEmail("izac@gmail.com"));
console.log(validator.isEmail("izac"));
const numbphone = "628213521093";
console.log(validator.isMobilePhone(numbphone, "id-ID"));
