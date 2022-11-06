const path = require("path");
const fs = require("fs");
const process = require("process");
const readLine = require("readline");
const { stdin: input, stdout: output } = require("process");

const newFilePath = path.join(__dirname, "text.txt");
const writeStream = fs.createWriteStream(newFilePath);
const rl = readLine.createInterface({ input, output });

const close = () => {
  output.write("42");
  rl.close();
};

output.write("Задавайте ответы.\n");

rl.on("line", (line) => {
  if (line === "exit") {
    close();
  } else {
    writeStream.write(`${line}\n`);
  }
});

rl.on("SIGINT", close);
