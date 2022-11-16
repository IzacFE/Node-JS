const fs = require("fs");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
    const fileBuffer = fs.readFileSync("data/contact.JSON", "utf-8");
    const contacts = JSON.parse(fileBuffer);
    return contacts;
}

module.exports = { loadContact };
