const path = require("path");
const fs = require("fs");
const process = require("process");
const { stdout } = process;

const filePath = path.join(__dirname, "text.txt");
const readStream = fs.createReadStream(filePath, "utf-8");

readStream.on("data", (chunk) => {
  stdout.write(chunk);
});
